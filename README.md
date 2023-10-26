# nodejs-docker-simple

A simple Node.js server that can be used to serve files and handle GET and POST requests. 
The server.js script provided is a simple Node.js server that can be used to serve files and handle GET and POST requests.
The script uses the Express framework to simplify the development process.

## Getting Started

- Ensure that you have Nodejs installed on your system.

## Clone the repository

```
 git clone https://github.com/ajeetraina/nodejs-docker-simple
 cd nodejs-docker-simple
```

## Install the HTTP Module and Express package

```
 npm install http
 npm install express
```

## Run the server.js script

The server.js script provided is a simple Node.js server that can be used to serve files and handle GET and POST requests.

```
 node server.js
```

```
curl localhost:8000
<html>
<title> Testing NodeJS
</title>
<body>
Welcome to Node and Docker
</body>
</html>
```


## Using Dockerfile

```
 docker build -t ajeetraina/nodejs-simple
 docker run -d -p 8000:8000 -v /Users/ajeetraina/Public:/public ajeetraina/nodejs-simple
```

```
 docker ps
CONTAINER ID   IMAGE                      COMMAND                  CREATED         STATUS         PORTS                    NAMES
b5cbbe97de9b   ajeetraina/nodejs-simple   "docker-entrypoint.s…"   3 seconds ago   Up 2 seconds   0.0.0.0:8000->8000/tcp   elegant_keldysh
```

```
curl localhost:8000
<html>
<title> Testing NodeJS
</title>
<body>
Welcome to Node and Docker
</body>
</html>
```


## Best Practices


```
docker images
REPOSITORY                 TAG         IMAGE ID       CREATED          SIZE
ajeetraina/nodejs-simple   latest      61f1d11a84e2   6 minutes ago    1.11GB
```


## Using Multi-Stage Build


```
docker build -t ajeetraina/nodejs-simple-multi . -f Dockerfile.multistage
```

```
docker images
REPOSITORY                       TAG         IMAGE ID       CREATED          SIZE
ajeetraina/nodejs-simple-multi   latest      83fa50e77fce   6 seconds ago    277MB
ajeetraina/nodejs-simple         latest      61f1d11a84e2   8 minutes ago    1.11GB
```
