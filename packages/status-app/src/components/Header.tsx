import {
  Flex,
  Image,
  Spacer,
} from '@chakra-ui/react'
import logoTitle from '../assets/logo_title.svg'

function Header() {
  return (
    <Flex
      as='header'
      align='center'
      justify='space-between'
      w='full'
      px='6'
      py='3'
      bg={'white'}
      boxShadow='0px 4px 16px #F5F5F5'
      h='14'
    >
      <Image src={logoTitle} h='8' display={{ base: 'none', md: 'block' }} />
      <Spacer />
    </Flex>
  )
}

export default Header
