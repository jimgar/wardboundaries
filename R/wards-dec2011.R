#' Ward Boundaries for England and Wales December 2011
#'
#' Boundaries for Wards in England and Wales, as at December 2011. The BGC boundaries are generalised (20m) - clipped to the coastline (Mean High Water mark), however the polygons have been simplified to reduce file size more or less in line with that of 200m datasets (20m was the only available version). LAD codes and names have been added using the ONS Dec 2011 lookup. Contains both Ordnance Survey and ONS Intellectual Property Rights.
#'
#' @format Simple feature collection with 8588 features and 9 fields.
#' \describe{
#'   \item{OBJECTID}{Equivalent to row number}
#'   \item{WD11CD}{2011 Ward Code}
#'   \item{WD11CDO}{2011 alternative Ward Code}
#'   \item{WD11NM}{2011 Ward Name (English)} 
#'   \item{WD11NMW}{2011 Ward Name (Welsh)} 
#'   \item{Shape__Area}{Surface area (square meters)} 
#'   \item{Shape__Length}{Boundary length (meters)} 
#'   \item{LAD11CD}{2011 Local Authority District Code}
#'   \item{LAD11NM}{2011 Local Authority District Name} 
#'   \item{geometry}{Geometry type of MULTIPOLYGON} 
#' }
#' @source \url{https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2011_GCB_EW_2022/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson}
"wards_dec2011"