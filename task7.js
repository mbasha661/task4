
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Problem 1: Get all countries from the Asia continent/region using the Filter function
    const asiaCountries = data.filter(country => country.region?.includes('Asia'));
    console.log('Asia Countries:', asiaCountries);

    // Problem 2: Get all countries with a population of less than 2 lakhs using the Filter function
    const lowPopulationCountries = data.filter(country => country.population && country.population < 200000);
    console.log('Countries with Population less than 2 lakhs:', lowPopulationCountries);

    // Problem 3: Print the name, capital, and flag using the forEach function
    data.forEach(country => {
      const { name, capital, flags } = country;
      console.log(`Name: ${name.common}, Capital: ${capital}, Flag: ${flags.svg}`);
    });

    // Problem 4: Print the total population of countries using the reduce function
    const totalPopulation = data.reduce((acc, country) => acc + (country.population || 0), 0);
    console.log('Total Population:', totalPopulation);

    // Problem 5: Print the country which uses US Dollars as currency
    const usDollarCountries = data.filter(country => country.currencies && country.currencies.USD);
    console.log('Countries using US Dollars:', usDollarCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
