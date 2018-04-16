import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    render(){
        return (
            <div> 
                <PageHeader content="Todo" small="app" />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}