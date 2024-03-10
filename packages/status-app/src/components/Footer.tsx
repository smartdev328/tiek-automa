import { Flex, Image, Link, Spacer, Text } from '@chakra-ui/react'
import logoTitle from '../assets/logo_title.svg'

function Footer() {
  return (
    <Flex as='footer' justifyContent='flex-end' alignItems='center' py='12'>
      <Text variant='paragraph' color='gray.300'>
        Powered by&nbsp;
      </Text>
      <Link href=''>
        <Image src={logoTitle} h='6' mr='2' />
      </Link>
    </Flex>
  )
}

export default Footer
