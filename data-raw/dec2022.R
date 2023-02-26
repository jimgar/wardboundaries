source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("dec2022")

dec2022 <- sf::read_sf(api_url) |>
  dplyr::select(-GlobalID)

# Write to data folder
usethis::use_data(dec2022, overwrite = TRUE)
