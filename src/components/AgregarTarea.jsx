import React from 'react'
import { useState } from 'react'

export const AgregarTarea = ({ agregarTarea }) => {
    const [tarea, setTarea] = useState('')
    const onInputChange = (event) => {
        setTarea(event.target.value)
    }
    const onSubmit = (event) => {
        const envio = {
            nombre: tarea,
            visto: false
        }
        event.preventDefault()
        agregarTarea(tareas => [...tareas, envio])
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Ingresar tarea '
                value={tarea}
                onChange={onInputChange}
            />
        </form>
    )
}
