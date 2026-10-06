# KONA Nest 배포용 — Storybook 정적 빌드 후 serve 로 서빙
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .
RUN npx storybook build -o storybook-static

FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/storybook-static ./storybook-static
ENV PORT=3000
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=20s CMD wget -qO- http://127.0.0.1:3000/health || exit 1
CMD ["sh", "-c", "serve -s storybook-static -l ${PORT:-3000}"]
