docker build -t crostonj/dan_cafe_cart .

docker run -d -p 3001:3001 crostonj/dan_cafe_cart:latest

docker push crostonj/dan_cafe_cart:latest
