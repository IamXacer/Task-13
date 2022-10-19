import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default {
    title: 'API'
}

const settings = {
    withCredentials :true,
    headers: {
        'API-KEY':'d72e2117-2d83-4d38-8eca-7b1de338dcaa'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>()
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists',settings)
            .then((res)=>{
                setState(res)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'Redux'
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists',{title},settings)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId= '6ca47a68-8d05-4510-9276-2c64150fbcd7'
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,settings)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

