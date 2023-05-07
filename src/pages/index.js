import { Center, Box, Flex, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import BugdexButton from '@/components/BugdexButton'

export default function Player() {
  return (
    <>
      <Head>
        <title>Buglist</title>
        <meta name="description" content="A web game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex p="4">
        <Box w="auto">
          
        </Box>
        <Box flex="1" px={12}>

        </Box>
        <Box w="auto">
          <Center>
            <Stack>
              <BugdexButton />
            </Stack>
          </Center>
        </Box>
      </Flex>
    </>
  )
}
