import { useState } from 'react'

export default function Accordion(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                {props.children}
            </div>
        </div>
    )
}