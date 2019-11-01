const CountiesRepository = client => ({
  getCounties: async (countyID) => {
    let response = await client.post('/maps_obtener_comunas_por_regiones',{
      reg_id: countyID
    });
    return response;
  }
});

export default CountiesRepository;
