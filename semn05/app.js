const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// Middleware
app.use(express.json());        
app.use(cors());               
app.use(morgan("dev"));         

// Mensaje de prueba en la raíz
app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API RESTful!");
});

// Importamos los módulos de rutas
const ticketRoutes = require("./routes/ticket.routes");
const notificationRoutes = require("./routes/notification.routes");

// Rutas bases
app.use("/tickets", ticketRoutes);
app.use("/notifications", notificationRoutes);

const errorHandler = require("./errorHandler");
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});