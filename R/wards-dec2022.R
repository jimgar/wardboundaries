#' UK Ward Boundaries December 2022
#'
#' Boundaries for Wards in the United Kingdom as at December 2022. The boundaries are: (BSC) Super Generalised (200m) - clipped to the coastline (Mean High Water mark). Contains both Ordnance Survey and ONS Intellectual Property Rights. 
#'
#' @format Simple feature collection with 8483 features and 12 fields.
#' \describe{
#'   \item{WD22CD}{2022 Ward Code}
#'   \item{WD22NM}{2022 Ward Name (English)} 
#'   \item{WD22NMW}{2022 Ward Name (Welsh)} 
#'   \item{LAD22CD}{2022 Local Authority District Code}
#'   \item{LAD22NM}{2022 Local Authority District Name} 
#'   \item{BNG_E}{Easting} 
#'   \item{BNG_N}{Northing}
#'   \item{LONG}{Longitude} 
#'   \item{LAT}{Latitude} 
#'   \item{OBJECTID}{Equivalent to row number}
#'   \item{Shape__Area}{Surface area (square meters)} 
#'   \item{Shape__Length}{Boundary length (meters)} 
#'   \item{geometry}{Geometry type of MULTIPOLYGON} 
#' }
#' @source \url{https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2022_Boundaries_UK_BSC/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson}
"wards_dec2022"