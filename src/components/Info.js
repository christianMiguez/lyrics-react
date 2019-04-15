import React from 'react';

function Info({info}) {

  if(Object.keys(info).length === 0) {
    return null
  }

return (
  <div className="card border-light">
    <div className="card-header bg-primary text-light font-weight-bold">
    Información del Artista
    </div>
    <div className="card-body">
      <img src={info.strArtistThumb} alt='Arteista' />
      <p className="card-text">Genero: {info.strGenre}</p>
      <h2 className="card-text text-center">Biografía</h2>
      <p className="card-text">{info.strBiographyES}</p>
      <p className="card-text">
        <a href={`http://${info.strFacebook}`}>
          <i className="fab fa-facebook"></i>
        </a>
        <a href={`http://${info.strTwitter}`}>
          <i className="fab fa-twitter"></i>
        </a>
      </p>
    </div>
  </div>
  )
}

export default Info
