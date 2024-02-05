
async function fetchData(
  url: string,
  data: any,
  token:any,
  urlFile: string) {
  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Origin': urlFile,
              'Authorization': "Bearer " + token,
              'Accept': 'application/json'
          },
          body: JSON.stringify(data),
      });
      
      return response;
  } catch (err) {
      console.error('Error during fetch:', err);
      throw err
      }
}

export {fetchData}

