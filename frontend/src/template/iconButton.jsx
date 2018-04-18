import React from 'react'
import If from '../helpers/if'

export default props => (
    <If condition={!props.hide}>
        <button onClick={props.onClick} className={ "btn btn-" + props.style }>
            <i className={ "fa fa-" + props.icon }></i>
        </button>
    </If>
)