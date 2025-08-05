export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: Currency[];
  languages: Language[];
  translations: Record<string, string>;
  flag: string;
  regionalBlocs: Array<{
    acronym: string;
    name: string;
  }>;
  cioc: string;
  independent: boolean;
}

import countriesData from "../../data.json";

export const getAllCountries = (): Country[] => {
  return countriesData as Country[];
};

export const getCountryByCode = (code: string): Country | undefined => {
  return countriesData.find(
    (country) => country.alpha3Code.toLowerCase() === code.toLowerCase()
  ) as Country | undefined;
};

export const getCountriesByRegion = (region: string): Country[] => {
  return countriesData.filter(
    (country) => country.region.toLowerCase() === region.toLowerCase()
  ) as Country[];
};
