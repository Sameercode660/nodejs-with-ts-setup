# Setting Up a Node.js Project with TypeScript and Nodemon

This guide walks you through setting up a Node.js project with TypeScript and integrating Nodemon for development.

## Step 1: Initialize the Project

1. Create a new project folder:

   ```bash
   mkdir my-typescript-project
   cd my-typescript-project
   ```

2. Initialize a `package.json` file:

   ```bash
   npm init -y
   ```

## Step 2: Install Dependencies

1. Install TypeScript and necessary tools:

   ```bash
   npm install typescript ts-node @types/node --save-dev
   ```

2. Install Express and its type definitions (if using Express):

   ```bash
   npm install express
   npm install @types/express --save-dev
   ```

3. Install Nodemon for automatic server restarts:

   ```bash
   npm install nodemon --save-dev
   ```

## Step 3: Configure TypeScript

1. Initialize a `tsconfig.json` file:

   ```bash
   npx tsc --init
   ```

2. Update the `tsconfig.json` file with the following settings:

   ```json
   {
     "compilerOptions": {
       "target": "ESNext",
       "module": "CommonJS",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true
     },
     "include": ["src"],
     "exclude": ["node_modules"]
   }
   ```

## Step 4: Create the Project Structure

Organize the project files:

```
my-typescript-project/
├── src/
│   └── index.ts
├── dist/
├── tsconfig.json
├── package.json
├── nodemon.json
```

1. Create the `src` folder for TypeScript files:

   ```bash
   mkdir src
   touch src/index.ts
   ```

2. Add a simple Express server to `src/index.ts`:

   ```typescript
   import express from 'express';

   const app = express();
   const PORT = 3000;

   app.get('/', (req, res) => {
     res.send('Hello, TypeScript!');
   });

   app.listen(PORT, () => {
     console.log(`Server running at http://localhost:${PORT}`);
   });
   ```

## Step 5: Configure Nodemon

1. Create a `nodemon.json` file:

   ```bash
   touch nodemon.json
   ```

2. Add the following configuration:

   ```json
   {
     "watch": ["src"],
     "ext": "ts",
     "exec": "ts-node src/index.ts"
   }
   ```

## Step 6: Update `package.json` Scripts

Add the following scripts to your `package.json`:

```json
"scripts": {
  "start": "node dist/index.js",
  "build": "tsc",
  "dev": "nodemon"
}
```

- `start`: Runs the compiled JavaScript files.
- `build`: Compiles TypeScript to JavaScript.
- `dev`: Starts the development server with Nodemon.

## Step 7: Run the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Build the project for production:

   ```bash
   npm run build
   ```

3. Run the production server:

   ```bash
   npm start
   ```

## Final Structure

```
my-typescript-project/
├── src/
│   └── index.ts
├── dist/
├── tsconfig.json
├── package.json
├── nodemon.json
└── node_modules/
```

You're now set up with a Node.js project using TypeScript and Nodemon!
