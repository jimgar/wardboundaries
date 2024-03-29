#' UK Local Authority District Boundaries Dec 2023
#'
#' Boundaries for Local Authority Districts in the United Kingdom as at Dec 2023. The boundaries available are: (BGC) Generalised (20m) - clipped to the coastline (Mean High Water Mark). Contains both Ordnance Survey and ONS Intellectual Property Rights.
#'
#' @format Simple feature collection with 361 features and 10 fields.
#' \describe{
#'   \item{FID}{Feature ID}
#'   \item{LAD23CD}{2023 Local Authority District Code}
#'   \item{LAD23NM}{2023 Local Authority District Name}
#'   \item{LAD23NMW}{2023 Local Authority District Name in Welsh}
#'   \item{BNG_E}{Easting}
#'   \item{BNG_N}{Northing}
#'   \item{LONG}{Longitude}
#'   \item{LAT}{Latitude}
#'   \item{Shape__Area}{Surface area (square meters)}
#'   \item{Shape__Length}{Boundary length (meters)}
#'   \item{geometry}{Geometry type of MULTIPOLYGON}
#' }
#' @source \url{https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2023_Boundaries_UK_BGC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson}
"lad_dec2023_20m"
