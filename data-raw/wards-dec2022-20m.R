source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("wards_dec2022_20m")

wards_dec2022_20m <- sf::read_sf(api_url) |>
  dplyr::select(-GlobalID)

# Write to data folder
usethis::use_data(wards_dec2022_20m, overwrite = TRUE)
