# Use Node.js 20.11.1 base image
FROM node:20.11.1-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn cache clean --force
RUN yarn install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Generate Prisma Client code
RUN npx prisma generate

# Build
RUN yarn build

# Expose the port the app runs on, here, I was using port 3333
EXPOSE 3000

# Command to run the app
CMD ["yarn", "start:migrate:prod"]






# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 20 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
# 
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/

# FROM node:20-alpine as builder

# ENV NODE_ENV build

# USER node
# WORKDIR /home/node

# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile

# COPY --chown=node:node . .
# RUN npx prisma generate && yarn build 

# # ---

# FROM node:20-alpine

# ENV NODE_ENV production

# USER node
# WORKDIR /home/node

# COPY --from=builder --chown=node:node /home/node/package.json ./
# COPY --from=builder --chown=node:node /home/node/yarn.lock ./
# COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
# COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

# EXPOSE 3000

# CMD ["yarn", "start:migrate:prod"]















# FROM node:20 AS builder

# # Create app directory
# WORKDIR /app

# COPY package.json ./
# COPY yarn.lock ./
# COPY prisma ./prisma/

# # Install app dependencies
# RUN yarn install

# COPY . .

# RUN yarn build

# FROM node:20

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./
# COPY --from=builder /app/yarn.lock ./
# COPY --from=builder /app/dist ./dist

# EXPOSE 3000
# CMD [ "yarn", "start:migrate:prod" ]