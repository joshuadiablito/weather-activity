# Stage 1: Build the app
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.js ./
COPY . .

RUN npm ci
RUN npm run build

# Stage 2: Production image
FROM node:22-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["npm", "start"]
