# Record of API calls made to create package datasets.

api_calls <- tibble::tribble(
  ~dataset,                 ~date_published,   ~date_accessed,   ~web_page,                                                                                                            ~api_url,
  "countries_dec2022",      "2023-01-30",      "2023-03-11",     "https://geoportal.statistics.gov.uk/datasets/ons::countries-december-2022-uk-buc/about",                             "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Countries_December_2022_UK_BUC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  "countries_dec2022_20m",  "2023-01-30",      "2023-03-11",     "https://geoportal.statistics.gov.uk/datasets/ons::countries-december-2022-uk-bgc/about",                             "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Countries_December_2022_UK_BGC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  "lad_dec2022",            "2022-11-15",      "2023-03-11",     "https://geoportal.statistics.gov.uk/datasets/ons::local-authority-districts-december-2022-boundaries-uk-buc/about",  "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2022_Boundaries_UK_BUC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  "lad_dec2022_20m",        "2022-11-14",      "2023-03-11",     "https://geoportal.statistics.gov.uk/datasets/ons::local-authority-districts-december-2022-boundaries-uk-bgc/about",  "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2022_Boundaries_UK_BGC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  "wards_dec2022_20m",      "2022-11-25",      "2023-03-11",     "https://geoportal.statistics.gov.uk/datasets/ons::wards-december-2022-boundaries-uk-bgc/about",                      "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2022_Boundaries_UK_BGC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  "wards_dec2022",          "2022-11-25",      "2023-02-26",     "https://geoportal.statistics.gov.uk/datasets/ons::wards-december-2022-boundaries-uk-bsc/about",                      "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2022_Boundaries_UK_BSC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  "wards_dec2021",          "2021-12-15",      "2023-02-26",     "https://geoportal.statistics.gov.uk/datasets/ons::wards-december-2021-uk-bsc-1/about",                               "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2021_UK_BSC_2022/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  "wards_dec2020",          "2021-04-14",      "2023-02-26",     "https://geoportal.statistics.gov.uk/datasets/ons::wards-dec-2020-uk-bsc-v2/about",                                   "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_Dec_2020_UK_BSC_V2_2022/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  "wards_dec2019",          "2020-07-24",      "2023-02-26",     "https://geoportal.statistics.gov.uk/datasets/ons::wards-december-2019-boundaries-uk-bgc-1/about",                    "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2019_Boundaries_UK_BGC_2022/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  "wards_dec2011",          "2019-09-27",      "2023-02-26",     "https://geoportal.statistics.gov.uk/datasets/ons::wards-december-2011-generalised-clipped-boundaries-ew/about",      "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2011_GCB_EW_2022/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson"
)

extract_api_url <- function(dataset_name) {
  api_calls |>
    dplyr::filter(dataset == dataset_name) |>
    dplyr::pull(api_url)
}