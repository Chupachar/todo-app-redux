import React from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';
import { useSelector, useDispatch } from 'react-redux';
import {createTodo, toggleTodo, deleteTodo, ACTION_CREATE_ITEM} from './store/actions/todos';

function AddTodo() {

    const { todos } = useSelector((state) => (
        {
            todos: state.todos
        }
    ));

    const dispatch = useDispatch();

    function createTodoItem() {
        dispatch(createTodo())
    }

    function toggleTodoItem(id) {
        dispatch(toggleTodo(id))
    }
    function deleteTodoItem(id) {
        dispatch(deleteTodo(id))
    }

    return(
        <div className={'App'}>
            <List todos={todos} onToggle={toggleTodoItem} onDelete={deleteTodoItem}/>
            <Form onSave={createTodoItem}/>
        </div>
    )
}
export default AddTodo;
