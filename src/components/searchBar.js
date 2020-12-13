import React from 'react'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

const Search = (props) => {
    const {getCall, setCall, call} = props

    const [searchData, setSearchData] = React.useState(props.search)

    const handleSubmit = (event) => {
        event.preventDefault();

        getCall(searchData)
    }

    const handleChange = (event) => {
        setSearchData(event.target.value)
    }

    
    return (
<Navbar className="bg-light justify-content-between" variant ="dark">
  <Form inline onSubmit={handleSubmit}>
    <FormControl onChange={handleChange} type="text" placeholder="Phone Number" className=" mr-sm-2" />
    <Button type="submit" variant="outline-info">Submit</Button>
  </Form>
</Navbar>
    )
}
export default Search