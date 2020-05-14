# Stage 0, "build-stage" to build and compile the frontend
FROM node:11-alpine as build-stage
WORKDIR /app
COPY . ./
RUN npm i
RUN npm run build

# Stage 1, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html/2019-2-Track-Frontend-V-Danilova
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
