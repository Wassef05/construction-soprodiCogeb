// import express from 'express';
// import {
//   deleteUser,
//   updateUser,
//   getUser,
//   createUser,
// } from '../controllers/user.controller.js';

// const router = express.Router();

// router.post('/', createUser);
// router.get('/:id', getUser);
// router.post('/update/:id', updateUser);
// router.delete('/delete/:id', deleteUser);

// // Export du router
// export default router;
const express = require('express');
const {
  deleteUser,
  updateUser,
  getUser,
  createUser,
} = require('../controllers/user.controller'); // Vérifiez ce chemin et les exportations

const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUser);
router.post('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

// Export du router
module.exports = router;
