import { Center, Box, Flex, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import LegendTag from '@/components/LegendTag'
import { legend } from '@/lib/buglist'

export default function Home() {
  return (
    <>
      <Head>
        <title>Buglist</title>
        <meta name="description" content="A web game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex p="4">
        <Box w="25%">
          <Center>
            <Stack>
              {legend.map((legendType) => (
                <LegendTag key={legendType.key} legendType={legendType} />
              ))}
            </Stack>
          </Center>
        </Box>
        <Box flex="1">
          Stuff 2
        </Box>
        <Box w="25%">
          Stuff 3
        </Box>
      </Flex>
    </>
  )
}
