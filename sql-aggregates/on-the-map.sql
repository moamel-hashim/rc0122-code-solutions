select "countries"."name" as "countryName", count("cities".*) as "cityPerCountry"
from "cities"
join "countries" using ("countryId")
group by "countries"."name";
