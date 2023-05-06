import { Tabs, Tab, TabPanels, SimpleGrid, TabList, TabPanel, Text } from '@chakra-ui/react'
import SpeciesTag from '@/components/SpeciesTag'
import { species, legend } from '@/lib/buglist'

export default function PageTabs({ selectedSpeciesType = 'all' }) {

  function speciesByType(type) {
    return species.filter(s => (s.type === type || type === 'all'))
  }

  function pageSpecies(pageNumber) {
    return speciesByType(selectedSpeciesType).filter(s => s.pages.includes(pageNumber))
  }

  return (
    <>
      <Tabs>
        <TabList>
          <Tab key="all">All</Tab>
          {legend.map((legendType, index) => (
            <Tab key={index}>Page {index + 1}</Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={6} spacing={2}>
              {speciesByType(selectedSpeciesType).map((speciesType) => (
                <SpeciesTag key={speciesType.key} speciesType={speciesType} />
              ))}
            </SimpleGrid>
          </TabPanel>
          {
            legend.map((legendType, index) => {
              return (
                <TabPanel key={index}>
                  <SimpleGrid columns={6} spacing={2}>
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
    </>
  )
}
