import React from "react";
import classes from "./News.module.css"
const New = (props) => {
    return <div className={"container " + classes.container} >
            <a href={props.url} className="is-size-5 has-text-weight-medium" >{props.title}</a>
            <div>
                {
                    props.img &&
                    <img src={props.img || false} alt="" className={classes.img}/>
                }
                <p>
                    {props.content}
                </p>
            </div>
            <div>
                {props.author}
            </div>

    </div>
}
export  default New;