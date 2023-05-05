import { Avatar } from '@chakra-ui/react'

export default function TypeBadge({ legendType }) {
  function getInitials() {
    return legendType.badge
  }

  return (
    <Avatar
      name={legendType.key}
      getInitials={getInitials}
      size='xs'
      bg={legendType.color}
      color={legendType.textColor}
    />
  )
}
