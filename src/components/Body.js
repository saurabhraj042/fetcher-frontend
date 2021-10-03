import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ListGroup } from "react-bootstrap";
import NoticeItem from "./NoticeItem";

function Body(props){
    return(
        <div className="mainBody centered">
            <Row>
                <Col>
                    <ListGroup>
                        {props.data.map(notice => 
                                        <NoticeItem 
                                            key={notice.link} 
                                            link={notice.link} 
                                            title={notice.title}
                                        />
                                        )
                        }
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default Body