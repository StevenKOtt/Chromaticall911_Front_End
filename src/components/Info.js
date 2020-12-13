import React from "react"
import {Card, Button} from 'react-bootstrap'

const Info = (props) => {
    const {location} = props
    return (
        <Card>
         <Card.Header as="h5">Caller Information</Card.Header>
        <Card.Body>
        <Card.Title>Estimated Address</Card.Title>
        <Card.Text>
           41-05 35th Ave
        </Card.Text>
        <Card.Title>Latitude</Card.Title>
        <Card.Text>
           {location.lat}
        </Card.Text>
        <Card.Title>Longitude</Card.Title>
        <Card.Text>
           {location.lng}
        </Card.Text>
        </Card.Body>
         </Card>
    )
}

export default Info