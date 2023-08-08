#' UK Ward Boundaries May 2023
#'
#' Boundaries for Wards in the United Kingdom as at May 2023. The boundaries are: (BSC) Super Generalised (200m) - clipped to the coastline (Mean High Water mark). Contains both Ordnance Survey and ONS Intellectual Property Rights. 
#'
#' @format Simple feature collection with 8441 features and 12 fields.
#' \describe{
#'   \item{FID}{Field ID}
#'   \item{WD23CD}{2023 Ward Code}
#'   \item{WD23NM}{2023 Ward Name (English)} 
#'   \item{WD23NMW}{2023 Ward Name (Welsh)} 
#'   \item{LAD23CD}{2023 Local Authority District Code}
#'   \item{LAD23NM}{2023 Local Authority District Name} 
#'   \item{BNG_E}{Easting} 
#'   \item{BNG_N}{Northing}
#'   \item{LONG}{Longitude} 
#'   \item{LAT}{Latitude} 
#'   \item{Shape__Area}{Surface area (square meters)} 
#'   \item{Shape__Length}{Boundary length (meters)} 
#'   \item{geometry}{Geometry type of MULTIPOLYGON} 
#' }
#' @source \url{https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/WD_MAY_2023_UK_BSC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson}
"wards_may2023"