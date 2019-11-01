# FARMACIAS DE LA REGIÓN METROPOLITANA

Servicios destinados ala busqueda de las farmacias
de la región metropolitana de Chile.

Aplicación nodejs dockerizada y utilizando nginx como proxy de servicios.
### Prerequisites

- node
- npm
- docker
- docker-compose

### Installing

Instalación de dependencias

```
npm install
```
## Running the tests

```
lerna test
```

## Run app

```
docker-compose up
```

## Endpoints
- {your.domain}/pharmacies/:countyName (devuelve la lista de farmacias por nombre de comuna)
- {your.domain}/counties/stgo (devuelve la lista de comunas de la región metropolitana)