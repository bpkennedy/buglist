import { useRouter } from 'next/router'
import Image from 'next/image'
import battle from '@/assets/SwordsCrossedIcon.svg'
import { Box } from '@chakra-ui/react'

export default function BattleButton() {
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
      onClick={() => router.push('/battle')}
    >
      <Image
        src={battle}
        alt="Battle Icon"
      />
    </Box>
  )
}
