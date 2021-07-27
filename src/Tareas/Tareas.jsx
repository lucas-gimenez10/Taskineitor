import React from 'react';
import {tareas} from './array'
import './Tarea.css';

export function Prueba() {
    let variable = tareas.map((e) => {
        return(
        <Tarea 
          titulo={e.titulo}
          fechaCreacion={e.fechaCreacion}
          dias={haceCuantosDias(e.fechaCreacion)}
          categoria={e.categoria}            
        />
        )
    }
    )
        return variable;
    }


 function Tarea(props) {

    return (
      <div className="contenedorPrincipal">
        <div className='contenedorTarea'>
          <p onClick = {infoTarea} className='tarea'>{props.titulo}</p>
          <p  onClick = {infoTarea} className='fechaCreacion'>{props.fechaCreacion} - Hace {props.dias} dias</p>
          <p className='categoriaTitulo'>Categoria:</p>
          <div className='categoria'>{props.categoria}</div>
        </div>
        <div className='contenedorSecundario'>
          <i onClick = {eventoTacho} class="far fa-trash-alt iconoTacho"></i>
          <div className='cuadrado'></div>
        </div>
      </div>
    )
  }

  function haceCuantosDias(fecha) {
      let diferenciaAnio = new Date() - new Date(fecha);
      let dias = Math.floor(diferenciaAnio / 1000 / 60 / 60 / 24);
      return dias;
  }

  const infoTarea = (e) => {
    console.log(e.target.innerHTML)
  }

  const eventoTacho = (e) => {
    let fecha = new Date();
    let tituloTarea = e.target.parentElement.parentElement.firstChild.firstChild.innerHTML;
    alert(`Deseas Borrar ${tituloTarea} - ${fecha}`)
  }