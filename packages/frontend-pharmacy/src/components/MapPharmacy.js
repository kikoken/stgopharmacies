import React from 'react';
import './MapPharmacy.css';

import {Gmaps, Marker} from 'react-gmaps';

//const API_KEY = 'AIzaSyDXSZMonTLSaMlEN7kyP_fLkHSsm6C1o2U'
const params = {v: '3.exp'};

const coords = {
  lat: -33.4726900,
  lng: -70.6472400
};
const MapPharmacy = (props) => {

  const onMapCreated = (map) => {
    map.setOptions({
      disableDefaultUI: true
    });
  }
  
  
  return (
      <section className="MapPharmacy">
        <article>
          <h2>{props.pharmacy.local_nombre}</h2>
          <dl>
            <dt>Dirección</dt>
            <dd>{props.pharmacy.local_direccion}</dd>
            <dt>Fono</dt>
            <dd>{props.pharmacy.local_telefono}</dd>
          </dl>
        </article>

        <Gmaps
          width={'100%'}
          height={'400px'}
          lat={props.pharmacy.local_lat || coords.lat}
          lng={props.pharmacy.local_lng || coords.lng}
          zoom={18}
          loadingMessage={'Be happy'}
          params={params}
          onMapCreated={onMapCreated}>
          <Marker
            lat={props.pharmacy.local_lat || coords.lat}
            lng={props.pharmacy.local_lng || coords.lng}
            draggable={false}
          />
          </Gmaps>
      </section>
  );
}

export default MapPharmacy;
