const geolocationData = {
    "es-MX": [
        "/datos-lr/mexico",
        "/loterias-sorteos/mexico",
        "/mundo/mexico"
    ],
    "es-CO": [
        "/datos-lr/colombia",
        "/loterias-sorteos/colombia",
        "/mundo/colombia"
    ],
    "es-VE": [
        "/datos-lr/venezuela",
        "/mundo/venezuela"
    ],
    "es-CL": [
        "/datos-lr/chile",
        "/loterias-sorteos/chile"
    ],
    "es-AR": [
        "/mundo/argentina",
        "/datos-lr/argentina",
        "/loterias-sorteos/argentina"
    ],
    "es-PA": [
        "/datos-lr/panama",
        "/loterias-sorteos/panama"
    ],
    "es-ES": ["/loterias-sorteos/espana"],
    "es-DO": ["/loterias-sorteos/republica-dominicana"]
}
export function validateGeolocation(slug = "") {
    let locCode = "";
    Object.values(geolocationData).forEach((valueLocation, valueIndex) => {
        if (valueLocation.some(locItem => slug.startsWith(locItem))) {
            locCode = Object.keys(geolocationData)[valueIndex]
        }
    })
    return locCode
}