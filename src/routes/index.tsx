import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllCountries } from "../services/countriesService";
import { css } from "../../styled-system/css";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const countries = getAllCountries();

  return (
    <div
      className={css({
        maxWidth: "90%",
        margin: "0 auto",
      })}
    >
      <h1>liste pays</h1>
      <ul
        className={css({
          display: "flex",
          flexWrap: "wrap",
          gap: "12",
        })}
      >
        {countries.map((country) => (
          <Link
            className={css({
              maxWidth: { base: "90%", md: "20%" },
              borderRadius: "md",
              overflow: "hidden",
              boxShadow: "md",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            })}
            key={country.alpha3Code}
            to="/country/$countryId"
            params={{ countryId: country.alpha3Code.toLowerCase() }}
          >
            <img
              className={css({
                width: "100%",
                height: "50%",
                objectFit: "cover",
              })}
              src={country.flags.svg}
              alt={`${country.name} flags`}
            />
            <div
              className={css({
                padding: "4",
              })}
            >
              <h3 className={css({ fontWeight: "bold", py: "4" })}>
                {country.name}
              </h3>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
