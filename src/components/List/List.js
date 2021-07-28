import React from 'react';
import ListItem from '../ListItem/ListItem'


function List({todos, onToggle, onDelete}) {
    return(
        <div className={'add__list'}>
            <ul>
                {todos.map((item) => {
                    return <ListItem key={item.id} item={item} onToggle={onToggle} onDelete={onDelete}/>
                })}
            </ul>
        </div>
    )
}

export default List;