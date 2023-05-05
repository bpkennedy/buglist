import { Tag, TagLabel, Avatar } from '@chakra-ui/react'

export default function LegendTag({ legendType }) {
  function getInitials() {
    return legendType.badge
  }

  return (
    <Tag size='lg' colorScheme='gray' borderRadius='full'>
      <TagLabel mr={2}>
        {legendType.name}
      </TagLabel>
      <Avatar
        name={legendType.key}
        getInitials={getInitials}
        size='xs'
        bg={legendType.color}
        mr={2}
      />
      <TagLabel>
        {legendType.rarity}
      </TagLabel>
    </Tag>
  )
}
