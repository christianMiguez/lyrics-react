import React, {useState, useEffect, Fragment } from 'react'
import Formulario from './components/Formulario'
import axios from 'axios'
import Cancion from './components/Cancion'
import Info from './components/Info'


function App() {

  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  const consultarAPILetra = async busqueda => {
    const {artista, cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

    const resultado = await axios(url)

    agregarArtista(artista)

    agregarLetra(resultado.data.lyrics);

  }

  const consultarAPIArtista = async busqueda => {
    if(artista) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const resultado = await axios.get(url)

      agregarInfo(resultado.data.artists[0])
    }

  }

  useEffect(()=> {
    consultarAPIArtista()
  }, [artista])


 return(
   <Fragment>

      <Formulario consultarAPILetra={consultarAPILetra} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
          <Info info={info}/>
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>

   </Fragment>
 )
}

export default App
