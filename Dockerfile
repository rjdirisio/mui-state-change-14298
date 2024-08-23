# Fetching the node image on alpine linux, 21 doesn't work
# vitejs/vite#14691
# dart-lang/sdk#53784
FROM --platform=linux/amd64 public.ecr.aws/docker/library/node:20 AS builder

ARG MUI_PREMIUM_LICENSE

# Declaring env
ENV NODE_ENV production
ENV REACT_APP_MUI_X_LICENSE ${MUI_PREMIUM_LICENSE}

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package.json ./package-lock.json ./
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM --platform=linux/amd64 public.ecr.aws/nginx/nginx:latest-amd64

# Copying built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
