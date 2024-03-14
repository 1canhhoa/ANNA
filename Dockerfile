FROM node:18-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# Omit --production flag for TypeScript devDependencies

COPY gsap-bonus.tgz .

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  # Allow install without lockfile, so example works even without Node.js installed locally
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.js .


# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030
ARG NEXT_PUBLIC_REVALIDATE
ENV NEXT_PUBLIC_REVALIDATE=${NEXT_PUBLIC_REVALIDATE}
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ARG NEXT_PUBLIC_REST_API
ENV NEXT_PUBLIC_REST_API=${NEXT_PUBLIC_REST_API}
ARG NEXT_PUBLIC_ACF_API
ENV NEXT_PUBLIC_ACF_API=${NEXT_PUBLIC_ACF_API}
ARG NEXT_PUBLIC_V2_API
ENV NEXT_PUBLIC_V2_API=${NEXT_PUBLIC_V2_API}
ARG NEXTAUTH_SECRET
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
ARG NEXT_PUBLIC_SECRET_KEY_HASH
ENV NEXT_PUBLIC_SECRET_KEY_HASH=${NEXT_PUBLIC_SECRET_KEY_HASH}
ARG NEXT_PUBLIC_ONEPAY_HOST
ENV NEXT_PUBLIC_ONEPAY_HOST=${NEXT_PUBLIC_ONEPAY_HOST}
ARG NEXT_PUBLIC_ACCESS_CODE
ENV NEXT_PUBLIC_ACCESS_CODE=${NEXT_PUBLIC_ACCESS_CODE}
ARG NEXT_PUBLIC_MERCHANT_ID
ENV NEXT_PUBLIC_MERCHANT_ID=${NEXT_PUBLIC_MERCHANT_ID}
ARG NEXT_PUBLIC_REQUEST
ENV NEXT_PUBLIC_REQUEST=${NEXT_PUBLIC_REQUEST}
ARG GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}
ARG GOOGLE_CLIENT_SECRET
ENV GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET}


# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at build time
# ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else yarn build; \
  fi

# Note: It is not necessary to add an intermediate step that does a full copy of `node_modules` here

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Environment variables must be redefined at run time
ARG NEXT_PUBLIC_REVALIDATE
ENV NEXT_PUBLIC_REVALIDATE=${NEXT_PUBLIC_REVALIDATE}
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ARG NEXT_PUBLIC_REST_API
ENV NEXT_PUBLIC_REST_API=${NEXT_PUBLIC_REST_API}
ARG NEXT_PUBLIC_ACF_API
ENV NEXT_PUBLIC_ACF_API=${NEXT_PUBLIC_ACF_API}
ARG NEXT_PUBLIC_V2_API
ENV NEXT_PUBLIC_V2_API=${NEXT_PUBLIC_V2_API}
ARG NEXTAUTH_SECRET
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
ARG NEXT_PUBLIC_SECRET_KEY_HASH
ENV NEXT_PUBLIC_SECRET_KEY_HASH=${NEXT_PUBLIC_SECRET_KEY_HASH}
ARG NEXT_PUBLIC_ONEPAY_HOST
ENV NEXT_PUBLIC_ONEPAY_HOST=${NEXT_PUBLIC_ONEPAY_HOST}
ARG NEXT_PUBLIC_ACCESS_CODE
ENV NEXT_PUBLIC_ACCESS_CODE=${NEXT_PUBLIC_ACCESS_CODE}
ARG NEXT_PUBLIC_MERCHANT_ID
ENV NEXT_PUBLIC_MERCHANT_ID=${NEXT_PUBLIC_MERCHANT_ID}
ARG NEXT_PUBLIC_REQUEST
ENV NEXT_PUBLIC_REQUEST=${NEXT_PUBLIC_REQUEST}
ARG GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}
ARG GOOGLE_CLIENT_SECRET
ENV GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET}

# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

CMD ["node", "server.js"]
