import React from "react"
import './App.css';
import NavbarTop from "./components/Navbar_top";
import Info from "./components/Info";
import Maps from "./components/Maps";
import Auth from "./components/auth/Auth"
import Search from "./components/searchBar";
import Notes from "./components/Notes.js";
import Additional from "./components/Additional_Data"
import {Container, Row, Col, Nav} from 'react-bootstrap'
import { Route, Link, Switch } from "react-router-dom";
import {useAppState} from "./AppState.js"
import { propTypes } from "react-bootstrap/esm/Image";
export const App = (props) => {
  const {state, dispatch} = useAppState()
React.useState(() => {
  const auth = JSON.parse(window.localStorage.getItem("auth"))
  if (auth){
    dispatch({type: "auth", payload: auth})
    props.history.push("/search")
  } else {
    props.history.push("/")
  }
}, [])
//Get The Call Data
const [call, setCall] = React.useState([])
const getCall = (phone_number) => {
  fetch(`http://localhost:3000/call/${phone_number}`)
    .then((response) => response.json())
    .then((data) => {
      setCall({address: "1600 Amphitheatre Parkway, Mountain View, california.",lat: parseFloat(data.body.results[0].latitude,10), lng: parseFloat(data.body.results[0].longitude,10), center: {lat: parseFloat(data.body.results[0].latitude,10),lng: parseFloat(data.body.results[0].longitude,10)}}
        )
    })
}
    return(
     <Container>
        <Row>
          <Col>
            <Route path="/" component={NavbarTop}/>
          </Col>
        </Row>
        <Switch>
        <Route path="/auth/:form"
          render={(rp) => (
          <Row>
            <Col>
            <Auth {...rp} />
            </Col>
          </Row>
          )}         
        />

        <Route exact path="/search" render={(rp) => (
           <> 
            <Row>
              <Col>
              <Search setCall={setCall} search="" getCall={getCall} call={call} />
              </Col>
            </Row>
            <Row>
              <Col>
                < Maps {...rp} location = {call} zoomLevel = {15} />
              </Col>
              <Col>
                <Row>
                  <Col>
                  < Info {...rp} location = {call}/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  < Additional {...rp}/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        )}
        />
        <Route path="/notes" render={(rp) => (
          <Row>
            <Col>
            < Notes />
            </Col>
          </Row>
          
        )}
        />
        <Route exact path="/" render={(rp) => (
          <h1>Search for 911 data online to save lives.</h1>
        )} />
        </Switch>
      </Container>
    )
  }  


export default App;
