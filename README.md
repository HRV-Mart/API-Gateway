# API Gateway
[![Build Flow](https://github.com/HRV-Mart/API-Gateway/actions/workflows/build.yml/badge.svg)](https://github.com/HRV-Mart/API-Gateway/actions/workflows/build.yml)
![Docker Pulls](https://img.shields.io/docker/pulls/harsh3305/hrv-mart-api-gateway)
![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/harsh3305/hrv-mart-api-gateway)
![Docker Image Version (latest by date)](https://img.shields.io/docker/v/harsh3305/hrv-mart-api-gateway)
## Set up application locally
```
git clone https://github.com/HRV-Mart/API-Gateway.git
gradle clean build
```
## Set up application using Docker
```
docker run  --name HRV-Mart-API-Gateway -it --init --net="host" -d harsh3305/hrv-mart-api-gateway:latest
```