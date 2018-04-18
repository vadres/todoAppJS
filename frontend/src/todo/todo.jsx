import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = "http://localhost:3003/api/todo"

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { description: "", list: [] }

       // BIND DO THIS -- Ver this contexto léxico
       // Todo Form 
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
       // Todo List
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    refresh(description = ''){
        console.log(description)
        const search = `&description__regex=/${description}/`
        axios.get(`${URL}?sort=-createAt${search}`)
             .then(rs => this.setState({ description, list: rs.data }))
    }
    
    handleClear(){
        this.refresh()
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
             .then(rs => this.refresh(this.state.description)) 
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
             .then(rs => this.refresh(this.state.description)) 
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
             .then(rs => this.refresh(this.state.description))
    }
    
    handleChange(e){
        this.setState({ ...this.state, description: e.target.value })
    }

    handleSearch(){
        this.refresh(this.state.description)    
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
             .then(rs => this.refresh())
   }

    render(){
        return (
            <div> 
                <PageHeader content="Todo" small="app" />
                <TodoForm 
                    handleChange={this.handleChange} 
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}