import React from 'react'

export default props => (
    <header className="page-header">
        <h1>{props.content}<small> {props.small}</small></h1>
    </header>
)