import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function Header(props) {
    const btnText = (props.loading) ? "Run !" : "Run fetcher() Again !"
    return (
        <Row>
            <Col className="centered">
                <Button onClick = {props.apiCall} variant="outline-success"> {btnText}</Button>{' '}
            </Col>
        </Row>
    )
}
export default Header