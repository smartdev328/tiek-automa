import { Flex, Icon } from '@chakra-ui/react'
import { FiTrendingUp, FiTrendingDown, FiPause } from 'react-icons/fi'
import { Text } from '../components'
import { Monitor } from '../types'

interface StatsBoxProps {
  status: string
  stats?: Monitor[]
}

function StatsBox({ status, stats }: StatsBoxProps) {
  let bgColor
  switch (status) {
    case 'up':
      bgColor = 'green.200'
      break
    case 'down':
      bgColor = 'red.200'
      break
    case 'paused':
      bgColor = 'gold.200'
      break
    default:
  }

  const getMonitorCountByStatus = (status: string, mons?: Monitor[]) => {
    if (!mons) return 0

    switch (status) {
      case 'up':
        return mons.filter((entry) => entry.status === 'up').length
        break
      case 'down':
        return mons.filter((entry) => entry.status === 'down').length
        break

      case 'paused':
        return mons.filter((entry) => entry.status === 'paused').length
        break
    }
    return 0
  }

  return (
    <Flex
      px={{ sm: 2, lg: 4 }}
      py={2}
      flex={1}
      borderRadius={8}
      borderWidth={1}
      borderColor='gray.200'
      borderStyle='solid'
    >
      <Flex
        width={10}
        mr={{ sm: 2, lg: 4 }}
        height={10}
        alignItems='center'
        justifyContent='center'
        borderRadius={8}
        bg={bgColor}
      >
        {status === 'up' && <Icon color='white' as={FiTrendingUp} />}
        {status === 'down' && <Icon color='white' as={FiTrendingDown} />}
        {status === 'paused' && <Icon color='white' fill='white' as={FiPause} />}
      </Flex>
      <Flex direction={'column'} alignItems={'center'}>
        <Text variant='text-field' color='gray.300' mb={1} textTransform='capitalize'>
          Total {status}
        </Text>
        <Text variant='header' color='black'>
          {getMonitorCountByStatus(status, stats)}
        </Text>
      </Flex>
    </Flex>
  )
}

export default StatsBox
