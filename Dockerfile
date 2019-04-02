FROM nginx

RUN apt-get -y update
RUN apt-get -y install apt-utils build-essential git-core python wget
RUN wget -qO- https://deb.nodesource.com/setup_10.x > node_setup.sh
RUN bash node_setup.sh
RUN apt-get -y install nodejs
RUN npm install -g ember-cli

RUN mkdir /app
COPY package*.json /app/
RUN cd /app && npm ci
COPY . /app
RUN cd /app && ember build -environment production --output-path /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

