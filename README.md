# bloom

## Docker
### Install on Ubuntu

[Docker Documentation](https://docs.docker.com/engine/install/ubuntu/)

### Build Image
```
cd auth
docker build -t nadia/auth .
```
### Run Image
```
docker run -p 8081:8080 -d nadia/auth
```
