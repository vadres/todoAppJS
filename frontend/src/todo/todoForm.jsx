import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="todo-form">
        <Grid cols="6 6 6">
           <input id="description" 
            value={props.description}
            onChange={props.handleChange}
            className="form-control" placeholder="Adicione a Tarefa" />
        </Grid>
        <Grid cols="3 2 2"> 
            <IconButton onClick={props.handleAdd} style="primary" icon="plus" />
            <IconButton onClick={props.handleSearch} style="info" icon="search" />
            <IconButton onClick={props.handleClear} style="default" icon="close" />
        </Grid>
    </div>
)