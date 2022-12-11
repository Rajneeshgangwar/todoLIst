import React from "react";
import { AiFillDelete } from 'react-icons/ai';
import './Todolist.css';
const Todolist = (props) => {

    return (
        <>
            <div className="item_list">
                < AiFillDelete className="icon"
                    onClick={() => {
                        props.onSelect(props.id);
                    }} />
                <li>{props.text}</li>
            </div>
        </>
    );
}

export default Todolist;