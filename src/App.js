import React, { Fragment, useEffect, useState } from 'react';
import Clima from './components/Clima';
import Error from './components/Error';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Spinner from './components/Spinner';






function App() {


  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''
})
const {ciudad, pais} = busqueda

const [cargarapi, setCargarApi] = useState(false)
const [resultado, setResultado] = useState({})
const [error, setError] = useState(false)
const [iscargando, setIsCargando] = useState(false)





useEffect(() => {

  const consultarAPI = async () => {

    if(cargarapi) {
      
      
        const appId = 'd268697fbe2cdc1e96b54b02904c9568'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const peticion = await fetch(url)
        const respuesta = await peticion.json()
        setResultado(respuesta)

        setCargarApi(false)
        setIsCargando(false)
    }
  }
  
    consultarAPI()

},[cargarapi, ciudad, pais])

  useEffect(() => {
    //detecta si hubo resultados correctos en la consulta
    if (resultado.cod === '404') {
      setError(true)
    } else {
      setError(false)
    }
  },[resultado.cod])

      


//carga condicional de componentes
  let componente
  if (error) {
    componente = <Error mensaje='Ciudad no Encontrada'/>
  } else {
    componente = <Clima resultado={resultado} />
  }





  return (
    <Fragment>
      <Header titulo='Clima App'/>

      <div className='clima'>
        <div className='clima__formulario'>
          <Formulario 
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            setCargarApi={setCargarApi}
            setIsCargando={setIsCargando}
          />
        </div>

        {iscargando ? <Spinner /> : (
             <div className='clima__clima'>
             {componente}
           </div>
        )}

       
      </div>

    </Fragment>
  );
}

export default App;
