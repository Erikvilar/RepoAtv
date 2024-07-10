import React from 'react'
import "./ex5.css"
const component = ({ title, information }) => {
    if (information == "none") {
        return (
            <div className="classeComBorda">
                <h1>{title}</h1>
            </div>

        )

    } else {
        return (
            <component className="ClasseSemBorda">
                <h1>{title}</h1>
                <p>{information}</p>
            </component>
        )
    }
}
export default component
