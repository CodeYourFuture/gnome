import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import { UserType } from "../UserType";
export default class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //to hold all the featured interests from the DB
      featuredInterest: [],
      //to hold the interests that the user picks
      interests: []
    };
  }

  //to handle the selection when the button is clicked
  handleSelection(evt) {
    //get the interestID from the button selected/clicked
    let interestID = evt.target.value;
    //make the button disabled once it is selected
    evt.target.disabled = true;
    //may not be needed as the button with the id is disabled
    //but in case
    let selectedInterests = this.state.interests;
    if (!selectedInterests.includes(interestID)) {
      selectedInterests.push(interestID);
    }
    this.setState({
      interests: selectedInterests
    });
  }
  componentWillMount() {
    //load all the featured interests from the DB
    fetch(`/api/interest`, {
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          featuredInterest: response
        });
      });
  }
  render() {
    const { featuredInterest } = this.state;
    return (
      <div>
        <Row>
          <Col className="sm-12">
            <ListGroup
              id="lists"
              className="d-flex flex-row flex-wrap align-content-center"
            >
              {featuredInterest.map((interest, index) => {
                if (index % 3 === 0) {
                  return (
                    <ListGroupItem key={index}>
                      <Button
                        color="info"
                        size="sm"
                        onClick={e => {
                          this.handleSelection(e);
                        }}
                        value={interest.interestID}
                      >
                        {interest.name}
                      </Button>
                    </ListGroupItem>
                  );
                } else if (index % 2 === 0) {
                  return (
                    <ListGroupItem key={index}>
                      <Button
                        color="success"
                        size="sm"
                        onClick={e => {
                          this.handleSelection(e);
                        }}
                        value={interest.interestID}
                      >
                        {interest.name}
                      </Button>
                    </ListGroupItem>
                  );
                } else {
                  return (
                    <ListGroupItem key={index}>
                      <Button
                        color="danger"
                        size="sm"
                        onClick={e => {
                          this.handleSelection(e);
                        }}
                        value={interest.interestID}
                      >
                        {interest.name}
                      </Button>
                    </ListGroupItem>
                  );
                }
              })}
            </ListGroup>
            <hr />
          </Col>
        </Row>
        <UserType interests={this.state.interests} />
      </div>
    );
  }
}
