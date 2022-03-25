select "line1", "city" . "name" as "cityName", "district" from "addresses" join "cities" as "city" using ("cityId")
