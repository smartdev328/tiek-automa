import {
  Box,
  Flex,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Header, Footer, StatsBox, Text } from '../components'
import { Monitor, StatusData } from '../types'
import { FiPause, FiTrendingUp, FiTrendingDown, FiChevronDown, FiChevronUp } from 'react-icons/fi'

function RunChart({ stats, narrowMode }: { stats?: Monitor; narrowMode?: boolean }) {
  const navigate = useNavigate()
  if (!stats || !stats.lastResults) {
    return <></>
  }

  const p50 = stats.day.p50
  const p95 = stats.day.p95
  const times = narrowMode ? 0.8 : 1

  return (
    <Flex gap={narrowMode ? '1' : '2'} alignItems='baseline' maxW={'430px'} height='auto'>
      {stats.lastResults.map((r) => (
        <Tooltip
          borderRadius='4'
          bg='darkgray.100'
          py={0.5}
          px={1.5}
          fontSize='sm'
          fontWeight='600'
          label={'Time - ' + r.totalTime + 'ms'}
          key={r.id}
        >
          <Box
            key={r.id}
            w='1.5'
            h={`${
              r.totalTime > p50 ? (r.totalTime > p95 ? 28 * times : 24 * times) : 20 * times
            }px`}
            bgColor={stats.status === 'paused' ? 'gold.200' : r.err ? 'red.200' : 'green.200'}
            borderRadius='4'
            _hover={{
              w: narrowMode ? '1.5' : '2',
            }}
            onClick={(e) => {
              e.stopPropagation()
              navigate('/console/apiruns/' + r.id)
            }}
          />
        </Tooltip>
      ))}
    </Flex>
  )
}

const SortIcons = () => (
  <Flex flexDirection='column' cursor='pointer'>
    <Icon as={FiChevronUp} fontSize='sm' color='darkblue.100'></Icon>
    <Icon as={FiChevronDown} fontSize='sm' color='darkblue.100'></Icon>
  </Flex>
)

const MonitorListItem = ({ mon }: { mon: Monitor }) => {
  if (!mon) return <></>

  return (
    <Tr bg={mon.status === 'paused' ? 'rgba(219, 219, 219, 0.3)' : ''}>
      <Td px={4} py={2}>
        <Text cursor='pointer' variant='text-field' color='darkblue.100'>
          {mon.monitorName}
        </Text>
      </Td>
      <Td px={4} py={2}>
        <Flex alignItems='center' gap={2}>
          {mon.status === 'paused' && (
            <>
              <Icon color='gold.200' fill='gold.200' as={FiPause} />
              <Text variant='text-field' color='gray.300'>
                Paused
              </Text>
            </>
          )}
          {mon.status === 'up' && (
            <>
              <Icon color='darkblue.100' as={FiTrendingUp} />
              <Text variant='text-field' color='gray.300'>
                Up
              </Text>
            </>
          )}
          {mon.status === 'down' && (
            <>
              <Icon color='red.200' as={FiTrendingDown} />
              <Text variant='text-field' color='gray.300'>
                Down
              </Text>
            </>
          )}
        </Flex>
      </Td>
      <Td px={4} py={2}>
        <RunChart stats={mon} narrowMode />
      </Td>
      <Td px={4} py={2}>
        <Text variant='text-field' color='gray.300'>
          {mon.uptime24 + '%'}
        </Text>
      </Td>
      <Td px={4} py={2}>
        <Text variant='text-field' color='gray.300'>
          {parseFloat(mon.day.avg).toFixed(2)}
        </Text>
      </Td>
      <Td px={4} py={2}>
        <Text variant='text-field' color='gray.300'>
          {mon.day.p95.toFixed(2)}
        </Text>
      </Td>
      <Td px={4} py={2}>
        <Text variant='text-field' color='gray.300'>
          {mon.uptime7d + '%'}
        </Text>
      </Td>
      <Td px={4} py={2}>
        <Text variant='text-field' color='gray.300'>
          {parseFloat(mon.week.avg).toFixed(2)}
        </Text>
      </Td>
      <Td px={4} py={2}>
        <Text variant='text-field' color='gray.300'>
          {mon.week.p95.toFixed(2)}
        </Text>
      </Td>
    </Tr>
  )
}

const uptime24 = (m: Monitor) => {
  if (m.day?.numItems > 0) {
    return Math.round(((m.day.numItems - m.day.numErrors) / m.day.numItems) * 100 * 100) / 100
  } else {
    return 0
  }
}

const uptime7d = (m: Monitor) => {
  if (m.week?.numItems > 0) {
    return Math.round(((m.week.numItems - m.week.numErrors) / m.week.numItems) * 100 * 100) / 100
  } else {
    return 0
  }
}

function StatusPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [sortOption, setSortOption] = useState<string>('')
  const [sortDir, setSortDir] = useState<string>('asc')
  const [sortedMonitors, setSortedMonitors] = useState<Monitor[]>([])

  useEffect(() => {
    document.title = 'Status Page'
  }, [])

  const API_SERVER =
    process.env.NODE_ENV === 'production'
      ? 'https://app.proautoma.com/api'
      : 'http://localhost:8080/api'

  const {
    data: statusPageData,
    isLoading,
    isError,
  } = useQuery<StatusData>(
    ['status-page', id],
    async () => {
      let resp = await fetch(`${API_SERVER}/status/${id}`, {
        method: 'GET',
        credentials: 'omit',
      })
      let data = await resp.json()
      data.monitors.map((item: Monitor) => {
        item.uptime24 = uptime24(item)
        item.uptime7d = uptime7d(item)
      })
      setSortedMonitors(data?.monitors)
      return data
    },
    {
      refetchInterval: 60000,
    }
  )

  const sortBy = (field: string) => {
    const data = statusPageData?.monitors.slice() || []

    switch (field) {
      case 'name':
        data.sort((a: Monitor, b: Monitor) => (a.monitorName > b.monitorName ? 1 : -1))
        break
      case 'status':
        data.sort((a: Monitor, b: Monitor) => (a.status > b.status ? 1 : -1))
        break
      case 'uptime':
        data.sort((a: Monitor, b: Monitor) =>
          a.uptime24 && b.uptime24 && a.uptime24 > b.uptime24 ? 1 : -1
        )
        break
      case 'day95':
        data.sort((a: Monitor, b: Monitor) =>
          a.day.p95 && b.day.p95 && a.day.p95 > b.day.p95 ? 1 : -1
        )
        break
      case 'dayAvg':
        data.sort((a: Monitor, b: Monitor) =>
          a.day.avg && b.day.avg && a.day.avg > b.day.avg ? 1 : -1
        )
        break
      case 'uptime7d':
        data.sort((a: Monitor, b: Monitor) =>
          a.uptime24 && b.uptime24 && a.uptime24 > b.uptime24 ? 1 : -1
        )
        break
      case 'day957d':
        data.sort((a: Monitor, b: Monitor) =>
          a.week.p95 && b.week.p95 && a.week.p95 > b.week.p95 ? 1 : -1
        )
        break
      case 'dayAvg7d':
        data.sort((a: Monitor, b: Monitor) =>
          a.week.avg && b.week.avg && a.week.avg > b.week.avg ? 1 : -1
        )
        break
      default:
    }
    if (sortOption === field) {
      const dir = sortDir === 'asc' ? 'desc' : 'asc'
      setSortedMonitors(dir === 'asc' ? data : data.reverse())
      setSortDir(dir)
    } else {
      setSortDir('asc')
      setSortedMonitors(data)
    }
    setSortOption(field)
  }

  if (isLoading)
    return (
      <Box textAlign='center' py='10' px='6'>
        Loading...
      </Box>
    )

  if (isError || !statusPageData) navigate('/404')

  return (
    <Box>
      <Header logo={statusPageData?.logoUrl} title={statusPageData?.name}></Header>
      <Box p='6'>
        <Flex gap={{ sm: 2, lg: 4 }}>
          <StatsBox status='up' stats={statusPageData?.monitors} />
          <StatsBox status='down' stats={statusPageData?.monitors} />
          <StatsBox status='paused' stats={statusPageData?.monitors} />
        </Flex>
        <Box py={6} flex='1'>
          <TableContainer>
            <Table>
              <Thead>
                <Tr bg='rgba(22, 216, 181, 0.1)'>
                  <Th px={4} py={3}>
                    <Flex alignItems='center' gap={1} onClick={() => sortBy('name')}>
                      <Text variant='emphasis' color='black'>
                        Name
                      </Text>
                      <SortIcons />
                    </Flex>
                  </Th>
                  <Th px={4} py={3}>
                    <Flex alignItems='center' gap={1} onClick={() => sortBy('status')}>
                      <Text variant='emphasis' color='black'>
                        Status
                      </Text>
                      <SortIcons />
                    </Flex>
                  </Th>
                  <Th px={4} py={3}>
                    <Text variant='emphasis' color='black'>
                      Data
                    </Text>
                  </Th>
                  <Th px={4} py={3}>
                    <Flex alignItems='center' gap={1} onClick={() => sortBy('uptime')}>
                      <Text variant='emphasis' color='black'>
                        24HR Uptime
                      </Text>
                      <SortIcons />
                    </Flex>
                  </Th>
                  <Th px={4} py={3}>
                    <Flex alignItems='center' gap={1} onClick={() => sortBy('dayAvg')}>
                      <Text variant='emphasis' color='black'>
                        24HR Avg
                      </Text>
                      <SortIcons />
                    </Flex>
                  </Th>
                  <Th px={4} py={3}>
                    <Flex alignItems='center' gap={1} onClick={() => sortBy('day95')}>
                      <Text variant='emphasis' color='black'>
                        24HR P95
                      </Text>
                      <SortIcons />
                    </Flex>
                  </Th>
                  <Th px={4} py={3}>
                    <Flex alignItems='center' gap={1} onClick={() => sortBy('uptime7d')}>
                      <Text variant='emphasis' color='black'>
                        7D Uptime
                      </Text>
                      <SortIcons />
                    </Flex>
                  </Th>
                  <Th px={4} py={3}>
                    <Flex alignItems='center' gap={1} onClick={() => sortBy('dayAvg7d')}>
                      <Text variant='emphasis' color='black'>
                        7D Avg
                      </Text>
                      <SortIcons />
                    </Flex>
                  </Th>
                  <Th px={4} py={3}>
                    <Flex alignItems='center' gap={1} onClick={() => sortBy('day957d')}>
                      <Text variant='emphasis' color='black'>
                        7D P95
                      </Text>
                      <SortIcons />
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedMonitors.map((mon: Monitor) => (
                  <MonitorListItem mon={mon} key={mon.monitorId} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default StatusPage
