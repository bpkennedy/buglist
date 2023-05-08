import { useState } from 'react'
import { Box, Tabs, Tab, TabPanels, SimpleGrid, TabList, TabPanel, Text, Flex } from '@chakra-ui/react'
import SpeciesTag from '@/components/SpeciesTag'
import SearchBox from '@/components/SearchBox'
import { species, legend } from '@/lib/buglist'

export default function PageTabs({ selectedSpeciesType = 'all' }) {
  const [searchTerm, setSearchTerm] = useState('')

  function searchedSpecies() {
    return species.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  function speciesByType(type) {
    return searchedSpecies().filter(s => (s.type === type || type === 'all'))
  }

  function pageSpecies(pageNumber) {
    return speciesByType(selectedSpeciesType).filter(s => s.pages.includes(pageNumber))
  }

  function handleSearch(value) {
    setSearchTerm(value)
  }

  return (
    <>
      <Flex>
        <Tabs flex='1'>
          <TabList mr={10}>
            <Tab key="all">All</Tab>
            {legend.map((legendType, index) => (
              <Tab key={index}>Page {index + 1}</Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={5} spacing={2}>
                {speciesByType(selectedSpeciesType).map((speciesType) => (
                  <SpeciesTag key={speciesType.key} speciesType={speciesType} />
                ))}
              </SimpleGrid>
            </TabPanel>
            {
              legend.map((legendType, index) => {
                return (
                  <TabPanel key={index}>
                    <SimpleGrid columns={5} spacing={2}>
                      {pageSpecies(index + 1).map((speciesType) => (
                        <SpeciesTag key={speciesType.key} speciesType={speciesType} />
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                )
              })
            }
          </TabPanels>
        </Tabs>
        <Box w="180px">
          <SearchBox handleChange={handleSearch} />
        </Box>
      </Flex>
    </>
  )
}
