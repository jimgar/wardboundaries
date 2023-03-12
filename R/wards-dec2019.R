#' UK Ward Boundaries December 2019
#'
#' Boundaries for Wards in the United Kingdom as at December 2019 The boundaries are: (BGC) Generalised (20m) - clipped to the coastline (Mean High Water mark), however the polygons have been simplified to reduce file size more or less in line with that of 200m datasets (20m was the only available version). LAD codes and names have been added using the ONS Dec 2019 lookup. Contains both Ordnance Survey and ONS Intellectual Property Rights.
#'
#' @format Simple feature collection with 8887 features and 12 fields.
#' \describe{
#'   \item{OBJECTID}{Equivalent to row number}
#'   \item{WD19CD}{2019 Ward Code}
#'   \item{WD19NM}{2019 Ward Name (English)} 
#'   \item{WD19NMW}{2019 Ward Name (Welsh)} 
#'   \item{BNG_E}{Easting} 
#'   \item{BNG_N}{Northing}
#'   \item{LONG}{Longitude} 
#'   \item{LAT}{Latitude} 
#'   \item{Shape__Area}{Surface area (square meters)} 
#'   \item{Shape__Length}{Boundary length (meters)} 
#'   \item{geometry}{Geometry type of MULTIPOLYGON} 
#'   \item{LAD19CD}{2019 Local Authority District Code}
#'   \item{LAD19NM}{2019 Local Authority District Name} 
#' }
#' @source \url{https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2019_Boundaries_UK_BGC_2022/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson}
"wards_dec2019"