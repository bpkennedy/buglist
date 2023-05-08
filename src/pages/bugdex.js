import { useState } from 'react'
import { Center, Box, Flex, Stack, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import LegendTag from '@/components/LegendTag'
import PageTabs from '@/components/PageTabs'
import BackButton from '@/components/BackButton'
import { legend } from '@/lib/buglist'

export default function Home() {
  const [selectedSpeciesType, setSelectedSpeciesType] = useState('all')

  function setSelected(type) {
    if (selectedSpeciesType === type) {
      setSelectedSpeciesType('all')
    } else {
      setSelectedSpeciesType(type)
    }
  }

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
            <Stack>
              <Center>
                <Heading as='h1' size='xl' noOfLines={1}>Bugdex</Heading>
              </Center>
              {legend.map((legendType) => (
                <LegendTag
                  key={legendType.key}
                  legendType={legendType}
                  onSelect={() => setSelected(legendType.key)}
                  selected={selectedSpeciesType === legendType.key}
                ></LegendTag>
              ))}
            </Stack>
          </Center>
        </Box>
        <Box flex="1" px={12}>
          <PageTabs selectedSpeciesType={selectedSpeciesType}/>
        </Box>
        <Box w="auto">
          <BackButton />
        </Box>
      </Flex>
    </>
  )
}
