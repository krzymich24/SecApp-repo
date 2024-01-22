# Boulder-Line

> An application that lets you find bouldering and rope-climbing routes in different locations in your vicinity and rate
> them 🔎🧗

The application was prepared as a demo for the _Application Security_ course at the Poznań University of Technology,
Cybersecurity M.Sc. Programme.

## Application Structure and Download

### The Structure

The application is divided into two primary parts: the front-end and the back-end,
available in `🌱/react/` and `🌱/api/` directories respectively.
Each has its own `package.json`. There is also a compose file in `🌱/docker-compose.yaml`
with database definition you'll need to run the app in development mode.

## The Installation

1. Have docker and nodejs installed
2. Run the db service from the `🌱/docker-compose.yaml`  (it will run a Postgres instance accessible on your host
   under http://localhost:5432—please make sure it's available)
3. Go to `🌱/api`, install dependencies and run the server:
    ```shell
    npm install
    npm start
    ```
4. Go to `🌱/react`, install dependencies and run the front-end app:
    ```shell
    npm install
    npm run dev
    ```
5. Open http://localhost:5173/ in your browser!
 