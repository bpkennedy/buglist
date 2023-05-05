import { Tag, TagLabel, Box, Grid, GridItem } from '@chakra-ui/react'
import { legend } from '@/lib/buglist'
import TypeBadge from '@/components/TypeBadge'

export default function SpeciesTag({ speciesType }) {
  return (
    <Tag size='lg ' bg="yellow.400" color="black" borderRadius='full'>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap={2}
        width="100%"
        p={2}
      >
        <GridItem colSpan={5}>
          <TagLabel ml={2}>
            {speciesType.name}
          </TagLabel>
        </GridItem>
        <GridItem colSpan={1}>
          <Box>
            <TypeBadge legendType={legend.find(l => l.key === speciesType.type)} />
          </Box>
        </GridItem>
      </Grid>
    </Tag>
  )
}
