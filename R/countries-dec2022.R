#' UK Countries Boundaries December 2022
#'
#' This file contains the digital vector boundaries for Countries in the United Kingdom as at December 2022. The boundaries available are: (BUC) Ultra generalised (500m) - clipped to the coastline (Mean High Water mark). Contains both Ordnance Survey and ONS Intellectual Property Rights. 
#'
#' @format Simple feature collection with 4 features and 10 fields.
#' \describe{
#'   \item{FID}{ID}
#'   \item{CTRY22CD}{2022 Country Code}
#'   \item{CTRY22NM}{2022 Country Name} 
#'   \item{CTRY22NMW}{2022 Country Name (Welsh)} 
#'   \item{BNG_E}{Easting} 
#'   \item{BNG_N}{Northing}
#'   \item{LONG}{Longitude} 
#'   \item{LAT}{Latitude} 
#'   \item{Shape__Area}{Surface area (square meters)} 
#'   \item{Shape__Length}{Boundary length (meters)} 
#'   \item{geometry}{Geometry type of MULTIPOLYGON} 
#' }
#' @source \url{https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Countries_December_2022_UK_BUC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson}
"countries_dec2022"