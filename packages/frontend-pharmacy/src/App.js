import React, { useState, useEffect } from 'react';
import './App.css';

import SelectList from './components/SelectorList';
import Map from './components/MapPharmacy';

import Repository from './api';

function App() {
  const [pharmacies, setPharmacies] = useState([]);
  const [counties, setCounties]  = useState([]);
  const [listPharmacies, setListPharmacies] = useState([]);
  const [pharmacy, setPharmacy] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchCounties = async () => {
    if(counties.length === 0) {
      setLoading(true);
      let response = await Repository.county.getAll();
      setCounties(response);
      setLoading(false);
    }
  }

  const fetchPharmacies = async (countyName) => {
    setLoading(true);
    let response = await Repository.pharmacy.getByCounty(countyName);
    setPharmacies(response);
    setLoading(false);
  }
  

  const handlerSelectionCounty = (countyName) => {
    if (countyName !== "N" ) fetchPharmacies(countyName);
  }

  const handlerSelectionPharmacy = (pharmacyID) => {
    if (pharmacyID !== "N" ) setPharmacy(pharmacies[pharmacyID]);
  }
  
  useEffect(() => {
    fetchCounties();
    if (pharmacies.length > 0) {
      let list = pharmacies.map((item, index) => {
        return {id:index, name: item.local_nombre}
      })
      setListPharmacies(list);
    };
  }, [pharmacies, pharmacy])


  return (
    <section className="Drugstore-app">
      <form id="f_search" className="Drugstore-search">
        <header>
          <h1>BUSCADOR DE FARMACIAS</h1>
        </header>
        {loading && <span className="loading">Cargando....</span>}
        {counties.length > 0 && <SelectList 
          name="scomunas" 
          label="Comunas" 
          optionLabel="Sele ccione una comuna"
          items={counties}
          handlerChange={handlerSelectionCounty}
          />}
          {
            listPharmacies.length > 0 && 
            <SelectList 
              name="sfarmacias" 
              label="Farmacias" 
              optionLabel="Seleccione una farmacia"
              items={listPharmacies}
              handlerChange={handlerSelectionPharmacy}
            />
          }
      </form>

      {pharmacy.local_nombre && <Map pharmacy={pharmacy}/>}

    </section>
  );
}

export default App;
