const bodyParser = require('body-parser');
const express = require('express');

const STATUS_USER_ERROR = 422;
const STATUS_OK = 200;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];
// const newPost = {id: 0, title:'title', contents:'contents'};
const newPost = {};

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());


// TODO: your code to handle requests

server.post('/posts', (req, res) => {
  const title = req.body.title;
  const contents = req.body.contents;
  // check for missing title
  if (!title) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'title is missing' });
    return;
  }
  // check for missing content
  if (!contents) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'contents is missing' });
    return;
  }
  if (title && contents) {

    posts.push(newPost);
    // res.status(STATUS_OK);
    // res.json(posts);
    // return;
  }
  res.json({posts});
  // if both checks pass, add new post object. Assign the post a unique id.
  // add it to the posts array. return the newly created object with id to the client
});


// Retrieve the list of posts
server.get('/posts', (req, res) => {
  const term = req.params.term;
  res.send({ posts });
});

module.exports = { posts, server };
