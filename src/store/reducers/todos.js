
import {
    ACTION_CREATE_ITEM,
    ACTION_TOGGLE_ITEM,
    ACTION_DELETE_ITEM,
} from "../actions/todos";


const initialState = {
    todos:
        [
            {
                id: 1,
                title: 'item 1',
                isDone: false
            },
            {
                id: 2,
                title: 'item 2',
                isDone: true
            },
            {
                id: 3,
                title: 'item 3',
                isDone: true
            }
    ]};

export default function rootReducer(state = initialState, {type, payload}){
    switch(type) {
        case ACTION_CREATE_ITEM:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        title: payload,
                        isDone: false
                    }
                    ]
                };
                // todos: [...state.todos, payload],

        case ACTION_TOGGLE_ITEM:
            return {
                ...state,
                todos: [
                    ...state.todos.map((item) => item.id === payload
                        ? {...item, isDone: !item.isDone} : item)
                ]
            };

        case ACTION_DELETE_ITEM:
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== payload)
            };
        default: return state;
        }
}



