import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {visto ? '✅' : '❌'}
        </li>
    )
};


export const ListadoApp = () => {

    const addTask = () => {
        setArreglo([...arreglo, { nombre: "Nueva tarea", visto: false }])
    }

    let listado = [
        { nombre: 'Mineria de datos', visto: true },
        { nombre: "Procesamiento de imagenes", visto: true },
        { nombre: "Taller de Tesis II", visto: true },
        { nombre: "Practicas pre profesionales", visto: true },
        { nombre: "Robotica", visto: true },
        { nombre: "Auditoria de sistemas", visto: true },
        { nombre: "Redes de comunicacion avanzada", visto: false },
        { nombre: "Criptologia", visto: false }
    ]

    const [arreglo, setArreglo] = useState(listado)

    return (
        <>
            <h1>Listas xdasasasd :</h1>
            <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>
            <ol>
                {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>
        </>
    )
}
