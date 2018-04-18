import React, { Component } from 'react'

export default class Grid extends Component {
    toCss(cols){
        let colsArray = cols != undefined? cols.split(" "): [12]

        let tag = ""

        if (colsArray[0] != undefined) tag +=  `col-xs-${colsArray[0]} `
        if (colsArray[1] != undefined) tag +=  `col-sm-${colsArray[1]} `
        if (colsArray[2] != undefined) tag +=  `col-md-${colsArray[2]} `
        if (colsArray[3] != undefined) tag +=  `col-lg-${colsArray[3]}`

        return tag
    }

    render(){
        let cols = this.toCss(this.props.cols)
        
        return (
            <div className={cols}>
                {this.props.children}
            </div>
        )
    }
}