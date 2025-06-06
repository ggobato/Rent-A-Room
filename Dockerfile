FROM node:12 as build
WORKDIR /app
ENV DISABLE_ESLINT_PLUGIN=true
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.14
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]