import React, { Fragment, useState } from 'react';


const useMoneda = (label, stateInicial, opciones)=>{

    //State del custom hook
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = ()=>{
        return(

            <Fragment>
                <label>{label}</label>
                <select>
                    <option>Seleccione</option>
                    {opciones.map(opcion=>(
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))}
                </select>
            </Fragment>
            
        );
    }
        
    

    // Retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;