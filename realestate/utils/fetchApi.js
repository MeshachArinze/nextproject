const options = {
  method: "GET",


  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": "bayut.p.rapidapi.com",
    "x-rapidapi-key": "fd62ea2f85msh9a3b24c5d67d0b4p15ad19jsn8cc24a0dd050",
  },
};

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {

  const response = await fetch(url, { options });

  return response.json();
};
