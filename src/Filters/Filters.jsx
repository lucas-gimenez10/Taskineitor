import React from 'react';
import './Filters.css'

export function Filters(){
    return (
        <>
           <div className="contenedorFilters">
                <input type="date" />
                <input type="date" />
                    <div>
                        <p className='textoSelect'>Categorias:</p>
                        <select name="Categorias">
                            <option value="Categorias">Categorias</option>
                            <option value="organización">Organización</option>
                            <option value="casa">Casa</option>
                            <option value="negocio">Negocio</option>
                            <option value="salud">Salud</option>
                            <option value="estudios">Estudios</option>
                        </select>
                    </div>
                    <div>
                        <p className='textoSelect'>Estado de Tarea:</p>
                        <select name="EstadoTarea">
                            <option value="Tareas">Tareas</option>
                            <option value="completada">Completada</option>
                            <option value="noCompletada">No Completada</option>
                        </select>
                    </div>
           </div>
        </>
    )
}