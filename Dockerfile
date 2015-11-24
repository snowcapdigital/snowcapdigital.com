FROM kcmerrill/base

RUN apt-get update && apt-get install -y nodejs npm && apt-get clean
RUN ln -s /usr/bin/nodejs /usr/bin/node
COPY package.json /var/www/html/package.json
RUN npm install
