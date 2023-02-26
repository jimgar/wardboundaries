#' UK Ward Boundaries December 2021
#'
#' Boundaries for Wards in the United Kingdom as at December 2021. The boundaries are: (BSC) Super Generalised (200m) - clipped to the coastline (Mean High Water mark). LAD codes and names have been added using the ONS Dec 2021 lookup. Contains both Ordnance Survey and ONS Intellectual Property Rights.
#'
#' @format Simple feature collection with 8694 features and 13 fields.
#' \describe{
#'   \item{OBJECTID}{Equivalent to row number}
#'   \item{WD21CD}{2021 Ward Code}
#'   \item{WD21NM}{2021 Ward Name (English)} 
#'   \item{WD21NMW}{2021 Ward Name (Welsh)} 
#'   \item{BNG_E}{Easting} 
#'   \item{BNG_N}{Northing}
#'   \item{LONG}{Longitude} 
#'   \item{LAT}{Latitude} 
#'   \item{Shape__Area}{Surface area (square meters)} 
#'   \item{Shape__Length}{Boundary length (meters)} 
#'   \item{GlobalID}{Not sure what this one is...}
#'   \item{geometry}{Geometry type of MULTIPOLYGON} 
#'   \item{LAD21CD}{2021 Local Authority District Code}
#'   \item{LAD21NM}{2021 Local Authority District Name} 
#' }
#' @source \url{https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2021_UK_BSC_2022/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson}
"dec2021"