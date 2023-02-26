source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("dec2020")

dec2020_no_lad <- sf::read_sf(api_url) |>
  dplyr::select(-GlobalID)

lookup <- 
  vroom::vroom(
  "data-raw/Ward_to_Local_Authority_District_(December_2020)_Lookup_in_the_United_Kingdom_V2.csv",
  col_select = c(WD20CD, LAD20CD, LAD20NM)
  )

# Add LAD names and codes
dec2020 <- dplyr::left_join(
  dec2020_no_lad, lookup, by = dplyr::join_by(WD20CD)
)

# Write to data folder
usethis::use_data(dec2020, overwrite = TRUE)
