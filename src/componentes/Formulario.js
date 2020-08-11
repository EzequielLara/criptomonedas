import React from 'react';
import styled from '@emotion/styled';
import useCriptomoneda from '../hooks/useCriptomoneda';
import useMoneda from '../hooks/useMoneda';


const Boton=styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width:100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color:#326AC0;
    }

`;

const Formulario = ()=>{

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        {codigo: 'MXN', nombre: 'Peso Mexicano' },
        {codigo: 'EUR', nombre: 'Euro' },
        {codigo: 'GBP', nombre: 'Libra Esterlina' }
    ]

    //Utilizar moneda
    const [moneda, SeleccionarMonedas]= useMoneda('Elige tu moneda', '', MONEDAS);

    //utilizar useCriptomoneda
    const [criptomoneda, SelecCripto] = useCriptomoneda('Elige tu Criptomoneda', '');

    return(
        <form>
            <SeleccionarMonedas />
            <SelecCripto />
            <Boton
                type="submit"
                value="Calcular"
            />

        </form>
    );
}

export default Formulario;