import { useRouter } from 'next/router'
import BugdexIcon from './BugdexIcon'
import { Box } from '@chakra-ui/react'

export default function BugdexButton() {
  const router = useRouter()

  return (
    <Box
      w={20}
      h={20}
      px={4}
      borderWidth={'2px'}
      borderRadius={'lg'}
      borderColor="blue.300"
      bg="blue.500"
      cursor={'pointer'}
      onClick={() => router.push('/bugdex')}
    >
      <BugdexIcon color="white"/>
    </Box>
  )
}
