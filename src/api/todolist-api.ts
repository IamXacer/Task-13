import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'd72e2117-2d83-4d38-8eca-7b1de338dcaa',
    },
}

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = axios.put(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            { title: title },
            settings
        )
        return promise
    },
    deleteTodolist(todolistId: string){
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`
            , settings)
        return promise
    },
    createTodolist(title: string){
        const promise =  axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists',{title},settings)
        return promise
    },
    getTodolist(){
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists',settings)
        return promise
    }
}