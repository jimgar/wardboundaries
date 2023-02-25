source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("dec2021")

dec2021_no_lad <- sf::read_sf(api_url)

lookup <- readxl::read_excel("data-raw/WD21_LAD21_UK_LU.xlsx")

# Add LAD names and codes
dec2021 <- dplyr::left_join(
  dec2021_no_lad, lookup, by = dplyr::join_by(WD21CD)
) |>
  dplyr::select(-WD21NM.y) |>
  dplyr::rename(WD21NM = WD21NM.x)

# Write to data folder
usethis::use_data(dec2021, overwrite = TRUE)
