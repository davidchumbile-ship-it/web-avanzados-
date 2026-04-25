const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// Rutas existentes
router.get("/", mainController.home);
router.get("/about", mainController.about);

// Nuevas rutas
router.get("/contact", mainController.contact);
router.post("/contact", mainController.saveContact);
router.get("/admin", mainController.admin);
router.get("/movies", mainController.movies);
router.post("/movies", mainController.saveMovie);

module.exports = router;