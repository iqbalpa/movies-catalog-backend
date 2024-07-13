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
