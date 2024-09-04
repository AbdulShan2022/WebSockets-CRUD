
# WebSockets Implementation with Socket.IO (CRUD operation using WebSocket)

This project demonstrates how to implement WebSockets using Socket.IO. WebSockets allow continuous, bidirectional communication between a web browser and a server, making them ideal for real-time applications such as live chat or gaming.

## Features

- **Real-time communication:** Establish a continuous connection between the client and server for instant data exchange.
- **Socket.IO integration:** Utilize Socket.IO to simplify the implementation of WebSockets.
- **Vite Server:** Enjoy fast and efficient development with Vite.


## Prerequisites

- **Node.js:** Ensure that Node.js is installed on your system.
- **npm or yarn:** Package manager to install dependencies.

## Getting Started

### 1. Clone the Repository

```bash
git clone repo url
cd your-repo-name
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

### 3. Run the Server

Start the server using the following command inside server directory:

Using npm:
```bash
node server.js
```

### 4. Run and Open the Client
Start the client using the following command inside client directory:

Using npm:
```bash
npm run dev
```

Open your web browser and navigate to `http://localhost:5173` to interact with the WebSocket client.

## Project Structure

- **server.js:** The main server file where the WebSocket connection is established using Socket.IO.
- **public/index.html:** The client-side code that connects to the WebSocket server and sends/receives messages.
- **package.json:** Lists project dependencies and scripts for running the project.

## Usage

1. Open multiple browser tabs pointing to `http://localhost:5173` which Vite server will be runing on it.
2. Start Adding multiple data and try on edit, delete and add, it will be reflected on the others tab without refreshing the page.

## Technologies Used

- **React:** For building the user interface.
- **Node.js:** Server-side JavaScript runtime.
- **Express.js:** Web framework for Node.js.
- **Socket.IO:** Library for real-time, bidirectional communication between web clients and servers.
