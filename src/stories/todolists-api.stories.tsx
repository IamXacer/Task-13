import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

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
        todolistAPI.deleteTodolist(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId= 'ec128c98-8885-4e9b-afaa-aff511ca3447'
        const title = 'NEST-JS'
        todolistAPI.updateTodolist(todolistId,title )
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

