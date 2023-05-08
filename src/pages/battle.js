import { Stack, Box, Flex, Center, Heading } from '@chakra-ui/react'
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
      <Flex p="4" height={'100%'}>
        <Box w="auto">
          <Center>
            <Heading as='h1' size='xl' noOfLines={1}>Battle</Heading>
          </Center>
        </Box>
        <Box
          flex="1"
          px={12}
          display={'flex'}
          gap={4}
        >
          <Box
            height={'100%'}
            flex={'1'}
            borderWidth={2}
            borderRadius="lg"
            borderColor={'gray.200'}
          >
            <Stack>
              <Center>
                <Heading as='h2' size='lg' noOfLines={1} pt={4}>Opponent</Heading>
              </Center>
            </Stack>
          </Box>
          <Box
            height={'100%'}
            flex={'1'}
            borderWidth={2}
            borderRadius="lg"
            borderColor={'gray.200'}
          >
            <Stack>
              <Center>
                <Heading as='h2' size='lg' noOfLines={1} pt={4}>You</Heading>
              </Center>
            </Stack>
          </Box>
        </Box>
        <Box w="auto">
          <BackButton />
        </Box>
      </Flex>
    </>
  )
}
