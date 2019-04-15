import React, {useState} from 'react';

  // destructuring
  // function Formulario(props) {
  function Formulario({consultarAPILetra}) {

  // busqueda es el state, y agregarBusqueda this.setState({})
  const [busqueda, agregarBusqueda] = useState({
    artista: '',
    cancion: ''
  })

  // función que hace onChange en los input del formulario
  const actualizarState = e => {
    agregarBusqueda({

      //copia del state
      ...busqueda,

      //obtiene datos del name del form
      [e.target.name] : e.target.value
    })
  }

  // cuando hacemos submit al form
  const enviarInformacion = e => {
    e.preventDefault();

    // gracias al destructuring
    // props.consultarAPI()
    consultarAPILetra(busqueda)

  }

  /* RETURN
  ********************************************/
  return (
    <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form onSubmit={enviarInformacion}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre Artista"
                                        onChange={actualizarState}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre Canción"
                                        onChange={actualizarState}
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Formulario
