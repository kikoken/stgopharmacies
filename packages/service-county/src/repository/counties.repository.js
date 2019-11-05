const CountiesRepository = client => ({
  getCounties: async (countyID) => {
    let response = await client.post(countyID);
    return response;
  }
});

export default CountiesRepository;
