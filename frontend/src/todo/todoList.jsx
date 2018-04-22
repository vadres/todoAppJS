import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

const TodoList = props => {
    function renderTableBody(){
        const list = props.list || []

        return list.map(todo => {
            return (
                <tr key={todo._id}>
                    <td className={todo.done? "mark-done": ""} >{todo.description}</td>
                    <td>
                        <IconButton onClick={ () => { props.handleMarkAsDone(todo)} } 
                                    icon="check" style="success"
                                    hide={todo.done} />
                        <IconButton onClick={ () => { props.handleMarkAsPending(todo)} } 
                                    icon="undo" style="warning"
                                    hide={!todo.done} />
                        <IconButton onClick={ () => { props.handleRemove(todo)} } 
                                    icon="trash-o" style="danger"
                                    hide={!todo.done} />
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="table-actions">Ações</th>
                </tr>
            </thead>
            <tbody>{renderTableBody()}</tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
export default connect(mapStateToProps)(TodoList)