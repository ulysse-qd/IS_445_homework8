const userData = {
  name: "Ulysse Q.D",
  countries: [
    {
      name: "France",
      year: 1998
    },
    {
      name: "Spain",
      year: 2006
    },
    {
      name: "Senegal",
      year: 2021
    },
    {
      name: "Netherlands",
      year: 2006
    },
    {
      name: "Greece",
      year: 2014
    },
    {
      name: "Martinique",
      year: 2009
    },
    {
      name: "Saint-Barthélemy",
      year: 2009
    },
    {
      name: "Germany",
      year: 2017
    },
    {
      name: "Martinique",
      year: 2009
    },
    {
      name: "Australia",
      year: 2018
    },
  ]
};

const url = "https://thejsway-server.herokuapp.com/api/countries";

async function getResponse() {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(error => console.error(error));
  const json = await res.text();
  console.log(json);
}

getResponse();