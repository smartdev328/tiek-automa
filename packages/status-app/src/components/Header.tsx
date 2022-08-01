import { Flex, Image, Spacer, Text } from '@chakra-ui/react'
import logoTitle from '../assets/logo_title.svg'

interface Props {
  logo?: string
  title?: string
}

function Header({ logo, title }: Props) {
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
      <Image src={logo || logoTitle} h='8' mr='2' display={{ base: 'none', md: 'block' }} />
      {title && (
        <Text fontSize='2xl' fontWeight='bold' color='black' textTransform='capitalize'>
          {title}
        </Text>
      )}
      <Spacer />
    </Flex>
  )
}

export default Header
