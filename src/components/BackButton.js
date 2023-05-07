import { useRouter } from 'next/router'
import { Box, Center } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function BackButton() {
  const router = useRouter()

  return (
    <Box
      w={20}
      h={20}
      p={2}
      borderWidth={'2px'}
      borderRadius={'lg'}
      borderColor="blue.300"
      bg="blue.500"
      cursor={'pointer'}
      onClick={() => router.back()}
    >
      <Center h={'100%'}>
        <ArrowBackIcon w={10} h={10} color={'white'} />
      </Center>
    </Box>
  )
}
