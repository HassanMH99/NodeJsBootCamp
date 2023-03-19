const express = require('express');
const router  = express.Router();
let movies = [
    { id: 1, title: "The Shawshank Redemption", director: "Frank Darabont" },
    { id: 2, title: "The Godfather", director: "Francis Ford Coppola" },
    { id: 3, title: "The Dark Knight", director: "Christopher Nolan" },
  ];
  let nextId = 4;
router.route("/").get((req,res)=>{
    res.json(movies)
})
router.route("/").post((req,res)=>{
    console.log(req.body);
    const { title, director } = req.body;
    if (title && director) {
      const movie = { id: nextId++, title, director };
      movies.push(movie);
      res.status(201).json(movie);
    } else {
      res.status(400).json({ message: 'Title and director are required' });
    }
})
router.route("/:id").put((req,res)=>{
    const id = parseInt(req.params.id);
  const { title, director } = req.body;
  const index = movies.findIndex(m => m.id === id);
  if (index !== -1 && title && director) {
    movies[index].title = title;
    movies[index].director = director;
    res.json(movies[index]);
  } else {
    res.status(404).json({ message: 'Movie not found or missing fields' });
  }
})
router.route("/:id").get((req,res)=>{
    const id = parseInt(req.params.id);
  const movie = movies.find(m => m.id === id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
})
router.route("/:id").delete((req,res)=>{
    const id = parseInt(req.params.id);
    const index = movies.findIndex(m => m.id === id);
    if (index !== -1) {
      const movie = movies[index];
      movies.splice(index, 1);
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
})

module.exports = router;