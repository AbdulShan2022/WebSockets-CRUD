const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});
let crudData = [];

io.on("connection", (socket) => {
  socket.on("data", (data) => {
    crudData.push(data);

    socket.emit("crudData", crudData);
  });
  socket.on("editData", (res) => {
    let currentIndex = crudData.findIndex((item) => item.id === res.id);
    if (currentIndex !== -1) {
      crudData[currentIndex] = { ...crudData[currentIndex], ...res };
    }
  });
  socket.on("deleteData", (id) => {
    let currentIndex = crudData.findIndex((item) => item.id === id);
    if (currentIndex !== -1) {
      crudData.splice(currentIndex, 1);
    }
  });
  setInterval(() => {
    socket.emit("crudData", crudData);
  }, 1000);
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
