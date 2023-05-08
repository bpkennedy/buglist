import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function SearchBox({ handleChange = () => {} }) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        children={<SearchIcon color='gray.300' />}
      />
      <Input 
        placeholder='Search for a bug'
        onChange={(e) => handleChange(e.target.value)}
      />
    </InputGroup>
  )
}
