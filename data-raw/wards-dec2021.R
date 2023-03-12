source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("wards_dec2021")

wards_dec2021_no_lad <- sf::read_sf(api_url) |>
  dplyr::select(-GlobalID)

lookup <- readxl::read_excel("data-raw/WD21_LAD21_UK_LU.xlsx") |>
  dplyr::select(WD21CD, LAD21CD, LAD21NM)

# Add LAD names and codes
wards_dec2021 <- dplyr::left_join(
  wards_dec2021_no_lad, lookup, by = dplyr::join_by(WD21CD)
)

# Write to data folder
usethis::use_data(wards_dec2021, overwrite = TRUE)
