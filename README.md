[README.md](https://github.com/user-attachments/files/22184928/README.md)
# MERN Online Store
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Yaoghost/ONLINE-STORE-MERN)

A full-stack online store application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project demonstrates a complete CRUD (Create, Read, Update, Delete) implementation for managing products. The frontend is a modern single-page application built with Vite and React, styled with Chakra UI, and uses Zustand for simple state management.

## Features

- **Full CRUD Functionality:** Create, read, update, and delete products.
- **Responsive UI:** A clean and responsive user interface built with Chakra UI, suitable for desktop and mobile devices.
- **RESTful API:** A backend API built with Node.js, Express.js, and Mongoose for interacting with the MongoDB database.
- **Client-Side State Management:** Efficient and lightweight state management using Zustand.
- **Light/Dark Mode:** Theme toggling for user preference.
- **Seamless Navigation:** Built as a single-page application using React Router.

## Tech Stack

| Category      | Technology                                                                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**  | [React](https://react.dev/), [Vite](https://vitejs.dev/), [Chakra UI](https://chakra-ui.com/), [Zustand](https://zustand-demo.pmnd.rs/), [React Router](https://reactrouter.com/) |
| **Backend**   | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)                                                                                         |
| **Database**  | [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)                                                                              |
| **Deployment**| The server is configured to serve the static frontend build in a production environment.                                                              |

## Project Structure

The repository is a monorepo containing both the frontend and backend applications.

```
.
├── backend/            # Express.js server
│   ├── config/         # Database configuration
│   ├── controllers/    # Route logic
│   ├── models/         # Mongoose schemas
│   └── routes/         # API routes
└── frontend/           # React client application (Vite)
    └── src/
        ├── components/
        ├── pages/
        └── store/      # Zustand state management
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm (Node Package Manager)
- A MongoDB database connection string (you can get one for free from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Yaoghost/ONLINE-STORE-MERN.git
    cd ONLINE-STORE-MERN
    ```

2.  **Create an environment file:**
    Create a `.env` file in the root of the project directory. Add your MongoDB connection URI and an optional port number.

    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

3.  **Install dependencies:**
    Install dependencies for both the backend and frontend.

    ```bash
    # Install backend dependencies
    npm install

    # Install frontend dependencies
    npm install --prefix frontend
    ```

### Running the Application

#### Development Mode

For development, you will run the backend and frontend servers in separate terminal windows. This enables features like hot-reloading.

1.  **Start the backend server** (from the root directory):
    ```bash
    npm run dev
    ```
    The backend API will be running on `http://localhost:5000`.

2.  **Start the frontend server** (from the root directory):
    ```bash
    npm run dev --prefix frontend
    ```
    The React application will be available at `http://localhost:5173`.

#### Production Mode

To simulate a production environment, you can build the React app and have the Express server serve the static files.

1.  **Build the application** (from the root directory):
    This command installs all dependencies and creates a production build of the frontend in the `frontend/dist` directory.
    ```bash
    npm run build
    ```

2.  **Start the production server** (from the root directory):
    ```bash
    npm run start
    ```
    The application will be served from `http://localhost:5000`.

## API Endpoints

The backend exposes the following RESTful API endpoints.

| Method   | Route              | Description                               |
| :------- | :----------------- | :---------------------------------------- |
| `GET`    | `/api/products`    | Retrieve a list of all products.          |
| `POST`   | `/api/products`    | Create a new product.                     |
| `PUT`    | `/api/products/:id`  | Update an existing product by its ID.   |
| `DELETE` | `/api/products/:id`  | Delete a product by its ID.             |
