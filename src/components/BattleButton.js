import { useRouter } from 'next/router'
import BugBattleIcon from './BugBattleIcon'
import { Box } from '@chakra-ui/react'

export default function BattleButton() {
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
      onClick={() => router.push('/battle')}
    >
      <BugBattleIcon color="white" />
    </Box>
  )
}
