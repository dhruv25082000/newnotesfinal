// const express = require('express');
import express from 'express';
const router = express.Router();
import {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
} from "../controllers/auth.controllers.js";

// const router = Router();

// Routes
router.get("/auth/signup", renderSignUpForm);

router.post("/auth/signup", singup);

router.get("/auth/signin", renderSigninForm);

router.post("/auth/signin", signin);

router.get("/auth/logout", logout);

export default router;
// module.exports = router;
