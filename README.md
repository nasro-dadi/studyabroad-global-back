# studyabroad-global-back

## Description

This is the backend service for the Study Abroad Global application. It is built using Node.js, Express, and TypeScript.

## Frontend Repository

[Frontend Repository](https://github.com/nasro-dadi/studyabroad-global-front)

## Installation

To install the dependencies, run:

```bash
pnpm install
```

## Scripts

- `start`: Starts the application using `ts-node`.
- `build`: Compiles the TypeScript code to JavaScript.
- `serve`: Serves the compiled JavaScript code using Node.js.
- `dev`: Starts the application in development mode using `nodemon`.

## Usage

To start the application in development mode, run:

```bash
pnpm dev
```

To build the application, run:

```bash
pnpm build
```

To serve the built application, run:

```bash
pnpm serve
```

## Dependencies

- `cors`: Middleware for enabling CORS.
- `dotenv`: Module for loading environment variables from a `.env` file.
- `express`: Web framework for Node.js.
- `zod`: TypeScript-first schema declaration and validation library.

## Dev Dependencies

- `@types/cors`: TypeScript definitions for `cors`.
- `@types/express`: TypeScript definitions for `express`.
- `@types/node`: TypeScript definitions for Node.js.
- `nodemon`: Tool for automatically restarting the application when file changes are detected.
- `ts-node`: TypeScript execution environment for Node.js.
- `typescript`: TypeScript language.

## License

This project is licensed under the MIT License.
