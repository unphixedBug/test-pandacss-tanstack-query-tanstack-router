import type { Country } from "../services/countriesService";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <div>
      <img src={country.flags.png} alt={country.name} />
      <h2>{country.name}</h2>
    </div>
  );
}
