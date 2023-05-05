import { Center, Box, Flex, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import LegendTag from '@/components/LegendTag'
import PageTabs from '@/components/PageTabs'
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
      <Flex p="4" className="test">
        <Box w="auto">
          <Center>
            <Stack>
              {legend.map((legendType) => (
                <LegendTag key={legendType.key} legendType={legendType} />
              ))}
            </Stack>
          </Center>
        </Box>
        <Box flex="1" px={12}>
          <PageTabs />
        </Box>
      </Flex>
    </>
  )
}
