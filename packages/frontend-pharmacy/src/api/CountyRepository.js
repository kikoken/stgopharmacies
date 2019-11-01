const CountyRepository = (api, url) => {
  const getAll = async () => {
    let response = await api.get(`${url}/comunas`);
    let data = response.data.map((item) =>{ return {id:item.comunaNombre , name: item.comunaNombre}});
    return data; 
  }
  
  return {
    getAll
  }
}

export default CountyRepository;
