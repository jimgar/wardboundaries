source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("dec2022_20m")

dec2022_20m <- sf::read_sf(api_url) |>
  dplyr::select(-GlobalID)

# Write to data folder
usethis::use_data(dec2022_20m, overwrite = TRUE)
