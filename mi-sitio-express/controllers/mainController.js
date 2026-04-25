const express = require("express");

// "Base de datos" en memoria
const messages = [];

const home = (req, res) => {
  res.render("home", { title: "Inicio" });
};

const about = (req, res) => {
  res.render("about", { title: "Acerca de" });
};

const contact = (req, res) => {
  res.render("contact");
};

const saveContact = (req, res) => {
  const { nombre, email, mensaje } = req.body;
  // Guardar en memoria
  messages.push({ nombre, email, mensaje });
  // Redirigir a admin para ver los mensajes
  res.redirect('/admin');
};

const admin = (req, res) => {
  res.render("admin", { messages });
};
// "Base de datos" en memoria para películas
const peliculas = [];

const movies = (req, res) => {
  res.render("movies", { peliculas });
};

const saveMovie = (req, res) => {
  const { titulo, director, genero, anio, sinopsis } = req.body;
  peliculas.push({ titulo, director, genero, anio, sinopsis });
  res.redirect('/movies');
};

const mainController = {
  home,
  about,
  contact,
  saveContact,
  admin,
  movies,
  saveMovie
};

module.exports = mainController;