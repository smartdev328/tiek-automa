import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

function StatusPage() {
  useEffect(() => {
    document.title = 'Status Page | ProAutoma'
  }, [])

  return (
    <Box textAlign='center' py='10' px='6'>
      Status Page
    </Box>
  )
}

export default StatusPage
