import { Box, Flex, Center, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import BackButton from '@/components/BackButton'

export default function Battle() {
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
          <Center>
            <Heading as='h1' size='xl' noOfLines={1}>Battle</Heading>
          </Center>
        </Box>
        <Box flex="1" px={12} />
        <Box w="auto">
          <BackButton />
        </Box>
      </Flex>
    </>
  )
}
