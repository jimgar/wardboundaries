source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("lad_may2023")

lad_may2023 <- sf::read_sf(api_url) |>
  dplyr::select(-GlobalID)

# Write to data folder
usethis::use_data(lad_may2023, overwrite = TRUE)
