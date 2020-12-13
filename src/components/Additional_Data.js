import React, { useState } from "react"
import {Card, Button, Fade} from 'react-bootstrap'

const Additional = (props) => {
    const {location} = props
    const [open, setOpen] = useState(false)
    return (
    <>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}>
            Click for Additional Data
        </Button>
        <Fade in={open}>
            <Card bg="secondary" text="white">
                <Card.Header as="h5">Additional Data</Card.Header>
                <Card.Body>
                <Card.Title>Lorem Ipsum</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque lectus, at vestibulum est. Quisque molestie iaculis sem, vitae fringilla tortor vehicula a. Vestibulum vel mi justo. Duis scelerisque volutpat eros, quis luctus quam convallis at. Cras scelerisque eu augue vitae mattis. Cras eget turpis euismod, vestibulum tortor id, accumsan elit. In hac habitasse platea dictumst.
                </Card.Text>
                <Card.Title>Ipsum Lorem</Card.Title>
                <Card.Text>
                    estibulum vel mi justo. Duis scelerisque volutpat eros, quis luctus quam convallis at. Cras scele
                </Card.Text>
                <Card.Title>Ipsum Lo</Card.Title>
                <Card.Text>
                    estibulum vel mi justo. Duis scelerisque volutpat eros, quis luctus quam convallis at. Cras scele
                </Card.Text>
                </Card.Body>
            </Card>
        </Fade>
    </>
    )
}

export default Additional