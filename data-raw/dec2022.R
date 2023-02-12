source("data-raw/api-calls.R")

api_url <- extract_api_url("dec2022")

dec2022 <- sf::read_sf(api_url)

usethis::use_data(dec2022, overwrite = TRUE)