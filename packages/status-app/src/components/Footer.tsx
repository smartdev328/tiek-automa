import { Flex, Image, Link, Spacer, Text } from '@chakra-ui/react'
import logoTitle from '../assets/logo_title.svg'

function Footer() {
  return (
    <Flex as='footer' justifyContent='flex-end' alignItems='center' py='12'>
      <Text variant='paragraph' color='gray.300'>
        Powered by&nbsp;
      </Text>
      <Text variant='text-field' color='darkblue.100'>
        <Link href='https://www.proautoma.com'>
          <Image src={logoTitle} h='6' mr='2' />
        </Link>
      </Text>
    </Flex>
  )
}

export default Footer
