import { useRouter } from 'next/router'
import Image from 'next/image'
import bugdex from '@/assets/BugdexIcon.svg'
import { Box } from '@chakra-ui/react'

export default function BugdexButton() {
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
      onClick={() => router.push('/bugdex')}
    >
      <Image
        src={bugdex}
        alt="Bugdex Icon"
      />
    </Box>
  )
}
