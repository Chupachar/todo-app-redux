import React from 'react';



function ListItem({item, onDelete, onToggle}) {

        function onDeleteBtnClick(e) {
            e.stopPropagation();
        onDelete(item.id)
        }
        function onToggleBtnClick() {
            onToggle(item.id)
        }

    return(
        <div>
            <li className={`todo__item ${item.isDone ? 'done' : ''}`} onClick={onToggleBtnClick}>{item.title}
            <span onClick={onDeleteBtnClick} className={'todo__delete'}>X</span>
            </li>
        </div>
    )
}

export default ListItem;
