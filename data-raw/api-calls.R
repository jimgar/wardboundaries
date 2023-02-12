# Record of API calls made to create package datasets.

api_calls <- tibble::tribble(
  ~dataset,   ~date_published,  ~date_accessed,  ~web_page,                                                                                       ~api_url,
  "dec2022",    "2022-11-25",     "2023-02-12",    "https://geoportal.statistics.gov.uk/datasets/ons::wards-december-2022-boundaries-uk-bsc/about", "https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2022_Boundaries_UK_BSC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson"
)

extract_api_url <- function(dataset_name) {
  api_calls |>
    dplyr::filter(dataset == dataset_name) |>
    dplyr::pull(api_url)
}