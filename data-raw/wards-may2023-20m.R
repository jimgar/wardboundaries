source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("wards_may2023_20m")

wards_may2023_20m <- sf::read_sf(api_url) |>
  dplyr::select(-GlobalID)

# Write to data folder
usethis::use_data(wards_may2023_20m, overwrite = TRUE)
