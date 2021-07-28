export const ACTION_CREATE_ITEM = 'ACTION_CREATE_ITEM';
export function createTodo(title) {
    return {type: ACTION_CREATE_ITEM, payload: title}
}
export const ACTION_TOGGLE_ITEM = 'ACTION_TOGGLE_ITEM';
export function toggleTodo(id) {
    return {type: ACTION_TOGGLE_ITEM, payload: id}
}
export const ACTION_DELETE_ITEM = 'ACTION_DELETE_ITEM';
export function deleteTodo(id) {
    return {type: ACTION_DELETE_ITEM, payload: id}
}

