import React from "react";
import {useAppState} from "../AppState.js"
import {Route,Link, withRouter} from "react-router-dom"
import {Card, CardGroup, Row, Col} from 'react-bootstrap'
import Form from "./Form"
const Notes = (props) => {
    const {state, dispatch} = useAppState()
    const {token, url, username} = state
    const getNotes = async () => {
        console.log(state)
        const response = await fetch(url + "/resources", {
            method: "get",
            headers: {
                Authorization: "bearer " + state.token
            }
        })
        const fetchNotes = await response.json()
        dispatch({type: "getNotes", payload: fetchNotes})
    }
    

    React.useEffect(() => {getNotes()}, [])

    const loaded = () => {
        console.log(state)
        return (
        <>
        <Row>
            <Col>
            <h1>{username}'s Note</h1>
            </Col>
            <Col>
            <Link to="/notes/new"><button>New Resource Note</button></Link>
            </Col>
        </Row>
        <Row>
            <Col>
            <Route path="/notes/:action" render={(rp) => <Form {...rp} getNotes={getNotes}/>}/>
            </Col>
        </Row>
        <Row>
        <CardGroup>
            {state.notes.map(note => (
                <Col>
                <Card bg='dark' style={{ width: '18rem', margin: '4px' }} border='warning' text='white' className="note" key={note.id} >
                  <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>
                        {note.body}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <button onClick={() => {
                        dispatch({type: "select", payload: note})
                        props.history.push("/notes/edit")
                    }}>Edit Resource</button>
                    <button onClick={() => {
                        fetch(url + "/resources/" + note.id, {
                            method: "delete",
                            headers: {
                                Authorization: "bearer " + state.token
                            }
                        })
                        .then(()=> getNotes())
                    }}>Delete Resource</button>
                  </Card.Footer>
                </Card>
                </Col>
            ))}
        </CardGroup>
        </Row>
        </>


    )}

    return state.notes ? loaded() : <h1>Loading...</h1>
}

export default withRouter(Notes)