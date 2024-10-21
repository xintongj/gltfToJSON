# How to Run

To set up and run the project, follow these steps:

1. Install the latest version of `webpack-dev-server`:
    ```sh
    npm install webpack-dev-server@latest --save-dev
    ```

2. Install `babel-loader`, `@babel/core`, and `@babel/preset-env`:
    ```sh
    npm install babel-loader @babel/core @babel/preset-env --save-dev
    ```

3. Start the server using Webpack:
    ```sh
    npx webpack serve
    ```

## Note
Output is in console.log when you run and inspect.

Place gltf and bin files in dist/assets.

To ensure the JSON file runs in BTL (Biochem Lab Simulation), **remove `envMap` and `up`** from the JSON file, as they cannot be parsed!
