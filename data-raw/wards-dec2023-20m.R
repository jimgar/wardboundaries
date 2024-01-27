source("data-raw/api-calls.R")
library(sf)

# Collect data
api_url <- extract_api_url("wards_dec2023_20m")

wards_dec2023_20m <- sf::read_sf(api_url) |>
  dplyr::select(-GlobalID)

# In this package we add LAD codes when they are missing
lads <- read.csv("data-raw/Ward_to_Local_Authority_District_(December_2023)_Lookup_in_the_United_Kingdom.csv")

lads <- lads[c("WD23CD", "LAD23CD", "LAD23NM", "LAD23NMW")]

wards_dec2023_20m <- merge(wards_dec2023_20m, lads, by = "WD23CD")

cols <- c(
  "FID",
  "WD23CD",
  "WD23NM",
  "WD23NMW",
  "LAD23CD",
  "LAD23NM",
  "LAD23NMW",
  "BNG_E",
  "BNG_N",
  "LONG",
  "LAT",
  "Shape__Area",
  "Shape__Length",
  "geometry"
)

wards_dec2023_20m <- wards_dec2023_20m[cols]

# Write to data folder
usethis::use_data(wards_dec2023_20m, overwrite = TRUE)
