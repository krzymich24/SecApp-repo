# Boulder-Line

> An application that lets you find bouldering and rope-climbing routes in different locations in your vicinity and rate
> them 🔎🧗

The application was prepared as a demo for the _Application Security_ course at the Poznań University of Technology,
Cybersecurity M.Sc. Programme.

## Application Structure, Download and Installation

### The Structure

The application is divided into two primary parts: the front-end and the back-end,
available in `🌱/react/` and `🌱/api/` directories respectively.
Each has its own `package.json`. There is also a compose file in `🌱/docker-compose.yaml`
with database definition you'll need to run the app in development mode.

### The Installation for Production

<!-- TODO: docker images and installation -->

### The Installation for Development

Pull this repository, go to both `🌱/react/` and `🌱/api/` and install the dependencies with a package manager of your choice:

```shell
cd ./react
npm install
# pnpm i
# yarn

cd ../api
npm install
# pnpm i
# yarn
```

Finally, pull the database image (or you can wait for docker to do it automatically when you run the compose file). 
```shell
TODO
```

## Running the App



## User Journey Through the App

### Auth Module

* Register
  * Confirm via a confirmation link
* Login after the registration
  * Reset password
    * Confirm via a confirmation link

### Gyms

* List all gyms

### Routes

* Read the details of a single gym to list all the routes for that gym
* Read a single route to see statistics and ratings for this route
  * Add a comment of your own!
  * If you are registered, you can also rate the route
* If you are a route-setter, you can create more routes for the gyms you are assigned to 

### Admin Actions

* Admin-only overview of the gyms
* Assign a user as a route-setter to a gym
* Remove/create gyms
* Remove routes

## Application's CRUD(L)

|                                           resource |     create     | read  | update |      delete       | list  |
|---------------------------------------------------:|:--------------:|:-----:|:------:|:-----------------:|:-----:|
|                                           **user** |     ⏳ user     |   ❌   |   ❌    |         ❌         |   ❌   |
| **route-setter** <br/> _gym↔user<br/>relationship_ |    ⏳ admin     |  n/a  |  n/a   |      ⏳ admin      |  n/a  |
|                                            **gym** |    ⏳ admin     | ⏳ all |   ❌    | ⏳ admin (cascade) | ⏳ all |
|                                          **route** | ⏳ route-setter | ⏳ all |   ❌    | ⏳ admin (cascade) | ⏳ all |
|                    **comment** <br/> _for a route_ |     ⏳ all      | ⏳ all |   ❌    |         ❌         | ⏳ all |   
|       **rating** <br/> _given on <br/> completion_ |     ⏳ user     | ⏳ all |   ❌    |         ❌         | ⏳ all | 