import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllCountries } from "../services/countriesService";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const countries = getAllCountries();

  return (
    <div>
      <h1>liste pays</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link
              to="/country/$countryId"
              params={{ countryId: country.alpha3Code.toLowerCase() }}
            >
              <img src={country.flags.svg} alt={`${country.name} flags`} />
              <h3>{country.name}</h3>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
              <p>Code: {country.alpha3Code}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
