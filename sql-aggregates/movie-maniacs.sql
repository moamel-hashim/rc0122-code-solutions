select "customers"."firstName" as "customerFirstName", "customers"."lastName" as "customerLastName", sum("amount") as "total"
from "payments"
join "customers" using("customerId")
group by "customerId"
order by "total" desc;
