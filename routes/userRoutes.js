// routes/userRoutes.js
const express = require('express');
const router = express.Router();

const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

router.route('/')
  .get(getUsers)     // GET /api/users
  .post(createUser); // POST /api/users

router.route('/:id')
  .get(getUserById)   // GET /api/users/:id
  .put(updateUser)    // PUT /api/users/:id
  .delete(deleteUser);// DELETE /api/users/:id

module.exports = router;
