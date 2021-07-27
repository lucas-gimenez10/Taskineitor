import React from 'react';
import { Prueba } from '../Tareas/Tareas';
import './Results.css'

export function Results(){
    return (
        <>
            <div className="contenedorResultados">
                <h3>Pendiente por hacer:</h3>
                <Prueba/>
            </div>
        </>
    )
}