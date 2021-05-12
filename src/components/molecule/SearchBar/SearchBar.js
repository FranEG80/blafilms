import { useEffect, useState } from "react"
import Button from "../../atom/Button"
import DivElement from "../../atom/DivElement"
import Form from "../../atom/Form"
import Input from "../../atom/Input"

const SearchBar = ({onChange, btnDisabled}) => {

  const [value, setValue] = useState('')

  useEffect(()=> {
    if (value === '') handleSubmit()
  })

  const handleChangeTxt = ({currentTarget}) => setValue(currentTarget.value)
  const handleSubmit = () => onChange(value) 
  
  return (
    <DivElement>
      <Form className='search'>
        <Input type="text" placeholder='Search...' onChange={handleChangeTxt}/>
        <Button onPress={handleSubmit} disabled={btnDisabled}>Search</Button>
      </Form>
    </DivElement>
)}

export default SearchBar