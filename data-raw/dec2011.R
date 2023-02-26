source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("dec2011")

dec2011_no_lad <- sf::read_sf(api_url) |>
  dplyr::rename_with(toupper, wd11cd:wd11nmw) |>
  dplyr::select(-GlobalID)

lookup <- 
  vroom::vroom(
  "data-raw/Wards_and_Local_Authorities_(2011)_to_Wards_and_Local_Authorities_(2022)_Lookup_in_England_and_Wales.csv",
  col_select = c(WD11CD, LAD11CD, LAD11NM)
  ) |>
  dplyr::distinct()

# Add LAD names and codes
dec2011_with_lad <- dplyr::left_join(
  dec2011_no_lad, lookup, by = dplyr::join_by(WD11CD)
)

# Unfortunately the boundaries are at 20m granularity, as 200m wasn't available.
# So need to simplify multipolygons to reduce file size.
dec2011 <-
  rmapshaper::ms_simplify(dec2011_with_lad, keep = 0.2)

# Write to data folder
usethis::use_data(dec2011, overwrite = TRUE)
