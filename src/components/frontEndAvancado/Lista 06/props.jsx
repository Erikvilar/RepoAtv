import React from 'react'
import "./ex6.css"
const props = ({ title, information }) => {
    if (information == "none") {
        return (
            <div className="classeComBorda">
                <h1>{title}</h1>
            </div>

        )

    } else {
        return (
            <div className="ClasseSemBorda">
                <h1>{title}</h1>
                <p>{information}</p>
            </div>
        )
    }
}
export default props
