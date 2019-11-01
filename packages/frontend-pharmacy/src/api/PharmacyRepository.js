const PharmacyRepository = (api, url) => {
  const getByCounty = async (countyName) => {
    let response = await api.get(`${url}/farmaciaByComunaLocal?comuna=${countyName}`);
    return response.data 
  }
  
  return {
    getByCounty
  }
}

export default PharmacyRepository;
