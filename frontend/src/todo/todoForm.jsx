import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeDescription } from './todoActions'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

const TodoForm = props => {
    function keyHandler(event){
        if (event.key === 'Enter'){
            event.shiftKey ? props.handleSearch(): props.handleAdd()
        } else if (event.key === 'Escape'){
            props.handleClear()
        }
    }
    
    return (
        <div role="form" className="todo-form">
            <Grid cols="6 6 6">
               <input id="description" 
                value={props.description}
                onKeyUp={keyHandler}
                onChange={props.changeDescription}
                className="form-control" placeholder="Adicione a Tarefa" />
            </Grid>
            <Grid cols="3 2 2"> 
                <IconButton onClick={props.handleAdd} style="primary" icon="plus" />
                <IconButton onClick={props.handleSearch} style="info" icon="search" />
                <IconButton onClick={props.handleClear} style="default" icon="close" />
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({
    changeDescription 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)