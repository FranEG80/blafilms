import Button from "../../atom/Button"
import DivElement from "../../atom/DivElement"
import Input from "../../atom/Input"

const SearchBar = () => (
    <DivElement className='search'>
      <Input type="text" placeholder='Search...' />
      <Button>Search</Button>
    </DivElement>
)

export default SearchBar