import { Center, Box, Flex, Stack, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import BugdexButton from '@/components/BugdexButton'
import BattleButton from '@/components/BattleButton'

export default function Player() {
  return (
    <>
      <Head>
        <title>Buglist</title>
        <meta name="description" content="A web game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex p="4" height={'100%'}>
        <Box w="auto">
          <Center>
            <Heading as='h1' size='xl' noOfLines={1}>Player</Heading>
          </Center>
        </Box>
        <Box flex="1" px={12}>

        </Box>
        <Box w="auto">
          <Center>
            <Stack>
              <BugdexButton />
              <BattleButton />
            </Stack>
          </Center>
        </Box>
      </Flex>
    </>
  )
}
