FROM node:current as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

RUN ng build

FROM nginx:alpine

COPY --from=build /app/dist/megapolis-frontend /www/public_html

COPY conf.d/ /etc/nginx/conf.d/

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/docker-entrypoint.sh /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
