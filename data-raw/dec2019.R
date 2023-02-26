source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("dec2019")

dec2019_no_lad <- sf::read_sf(api_url)

lookup <- 
  vroom::vroom(
  "data-raw/Ward_to_Local_Authority_District_(December_2019)_Lookup_in_the_United_Kingdom.csv",
  col_select = c(WD19CD, LAD19CD, LAD19NM)
  )

# Add LAD names and codes
dec2019 <- dplyr::left_join(
  dec2019_no_lad, lookup, by = dplyr::join_by(WD19CD)
)

# Write to data folder
usethis::use_data(dec2019, overwrite = TRUE)
