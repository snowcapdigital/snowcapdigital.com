FROM kcmerrill/base

RUN apt-get update && apt-get install -y nodejs npm && apt-get clean
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g grunt-cli
