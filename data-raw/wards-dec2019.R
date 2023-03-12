source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("wards_dec2019")

wards_dec2019_no_lad <- sf::read_sf(api_url) |>
  dplyr::select(-GlobalID)

lookup <- 
  vroom::vroom(
  "data-raw/Ward_to_Local_Authority_District_(December_2019)_Lookup_in_the_United_Kingdom.csv",
  col_select = c(WD19CD, LAD19CD, LAD19NM)
  )

# Add LAD names and codes
wards_dec2019_with_lad <- dplyr::left_join(
  wards_dec2019_no_lad, lookup, by = dplyr::join_by(WD19CD)
)

# Unfortunately the boundaries are at 20m granularity, as 200m wasn't available.
# So need to simplify multipolygons to reduce file size.
wards_dec2019 <-
  rmapshaper::ms_simplify(wards_dec2019_with_lad, keep = 0.2)

# Write to data folder
usethis::use_data(wards_dec2019, overwrite = TRUE)
