import { Tag, TagLabel, Grid, GridItem } from '@chakra-ui/react'
import TypeBadge from '@/components/TypeBadge'

export default function LegendTag({ legendType }) {
  return (
    <Tag size='lg ' colorScheme='gray' borderRadius='full'>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={2}
        width="12rem"
        p={2}
      >
        <GridItem colSpan={3}>
          <TagLabel ml={2}>
            {legendType.name}
          </TagLabel>
        </GridItem>
        <GridItem colSpan={1}>
          <TypeBadge legendType={legendType} />
        </GridItem>
        <GridItem colSpan={1}>
          <TagLabel flex="1">
            {legendType.rarity}
          </TagLabel>
        </GridItem>
      </Grid>
    </Tag>
  )
}
