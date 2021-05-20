import React, { useState} from 'react'
import Error from './Error'

const Formulario = ({busqueda, setBusqueda, setCargarApi, setIsCargando}) => {


    const [error, setError] = useState(false)

    //extraer los valores de la busqueda
    const {ciudad, pais} = busqueda

    //Funcion que se ejecuta cunado el usuario escribe en los inputs
    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario presiona el boton
    const handleSubmit = e => {
        e.preventDefault()

        //validar los campos
        if(ciudad.trim() === '' || pais.trim() === '' ) {
            setError(true)
            return
        }

        //si pasa la validacion
        setError(false)
        setIsCargando(true)


        //para que actualize la api
        setCargarApi(true)
    }





    return (
        <form 
            className='form-group'
            onSubmit={handleSubmit}
        >

            {error && <Error mensaje='Llena todos los campos'/>}

            <input 
                type='text'
                placeholder='Ciudad'
                name='ciudad'
                className='form-control'
                value={ciudad}
                onChange={handleChange}
            /> 

            <select 
                name='pais'
                className='form-control mt-3'
                value={pais}
                onChange={handleChange}
            >
              <option value="">-- Seleccione un país --</option>
                <option value="EC">Ecuador</option>
                <option value="PE">Perú</option>
                <option value="CO">Colombia</option>
                <option value="AR">Argentina</option>
                <option value="BR">Brasil</option>
                <option value="BO">Bolivia</option>
                <option value="CL">Chile</option>    
                <option value="UY">Uruguay</option>    
                <option value="PY">Paraguay</option>    
                <option value="VE">Venezuela</option>    
                <option value="MX">México</option>
                <option value="ES">España</option>
                <option value="US">Estados Unidos</option>
            </select>

            <input 
                type='submit'
                className='btn btn-warning form-control mt-4'
                value='Buscar Clima'
            />
        </form>
    )
}

export default Formulario
