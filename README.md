# SportSee

Dashboard to follow a user's running activity (sessions, distance, duration, calories). Built with React, React Router, TypeScript, Tailwind CSS and Recharts.

## Prerequisites

- [Node.js](https://nodejs.org/) 22.22 or higher
- The back end API: [P6JS](https://github.com/OpenClassrooms-Student-Center/P6JS/)

## Getting started

### 1. Start the back end

```bash
git clone https://github.com/OpenClassrooms-Student-Center/P6JS.git
cd P6JS
npm install
npm start
```

The API runs on `http://localhost:8000`.

### 2. Start the front end

In a second terminal, from this project's folder:

```bash
npm install
npm run dev
```

The app is available on `http://localhost:5173`.

## Demo accounts

| Username | Password |
|---|---|
| `sophiemartin` | `password123` |
| `emmaleroy` | `password789` |
| `marcdubois` | `password456` |

## Mock mode

To run the app without the back end, set `USE_MOCK` to `true` in `app/services/api.ts`:

```ts
const USE_MOCK = true;
```

In mock mode, the last names show "(Mock)". Log in again after switching mode.
