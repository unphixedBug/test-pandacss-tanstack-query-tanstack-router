import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/country/$countryId")({
  component: CountryDetailPage,
});

function CountryDetailPage() {
  const { countryId } = Route.useParams();

  return <div>detail pays {countryId}</div>;
}
