
import React, {useState} from 'react'

export default function Card() {
    const [carData, setCardData] = useState ({nombrePaciente: 'Paciente',apellido:'apellido',DNI:'DNI'});
    return (
        <div className='card'>
            <h1>{carData.nombrePaciente}</h1>
            <p>{carData.apellido}</p>

            <p>{carData.DNI}</p>
            <a href='#'>Mas información</a>
        </div>
    )
}