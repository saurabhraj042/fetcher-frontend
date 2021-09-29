import React from "react"
import { ListGroupItem } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"


function NoticeItem(props){
    return (
        <ListGroupItem action href={props.link}>
            <div className="centered">
                <h7 className="fontNoticeText">{props.title}</h7>
            </div>
        </ListGroupItem>
    )
}

export default NoticeItem