import React, { useState } from 'react';
function Form({onSave}) {

    const [newTodoTitle, setNewTodoTitle] = useState({title: ''});

    function onChange(e) {
        setNewTodoTitle({
            ...newTodoTitle,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault();
        onSave(newTodoTitle);
        resetForm();
        console.log(newTodoTitle)
    }

    function resetForm() {
        setNewTodoTitle({title: ''});
    }

    return(
        <form className={'add__todo'} onSubmit={submitHandler}>
            <input className={'add__input'} name="title" type="text" value={newTodoTitle.title} onChange={onChange}/>
            <button className={'add__btn'}>Add</button>
        </form>
    )
}

export default Form;
