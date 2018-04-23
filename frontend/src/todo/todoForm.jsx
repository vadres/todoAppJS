import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeDescription, search, add, clear } from './todoActions'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
   
    componentWillMount(){
        this.props.search()
    }

    keyHandler(event){
        let { add, clear, search, description } = this.props

        if (event.key === 'Enter'){
            event.shiftKey ? search(): add(description)
        } else if (event.key === 'Escape'){
            clear()
        }
    }

    render(){
        let { add, clear, search, changeDescription, description } = this.props

        return (
            <div role="form" className="todo-form">
                <Grid cols="6 6 6">
                <input id="description" 
                    value={description}
                    onKeyUp={this.keyHandler}
                    onChange={changeDescription}
                    className="form-control" placeholder="Adicione a Tarefa" />
                </Grid>
                <Grid cols="3 2 2"> 
                    <IconButton onClick={() => add(description)} style="primary" icon="plus" />
                    <IconButton onClick={() => search()} style="info" icon="search" />
                    <IconButton onClick={clear} style="default" icon="close" />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({
    changeDescription, search, add, clear 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)