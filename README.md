# Nuxt 3 Cognito login using AWS Amplify

This is a simple demo that uses AWS Amplify Gen 2 to create a protected application.

Features include:

* Route guarding
* Account creation
* Password reset
* Server routing

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Docker

Create and start the development container:

  ```bash
  docker compose up --build -d
  ```
  
Stop and remove the development container:

  ```bash
  docker compose down
  ```

Create and start the production container:

  ```bash
  docker compose -f compose.production.yaml up --build -d
  ```

Stop and remove the production container:

  ```bash
  docker compose -f compose.production.yaml down
  ```
