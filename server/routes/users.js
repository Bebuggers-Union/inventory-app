const express = require("express");
const router = express.Router();
const {User} = require("../models");

//GET all users

router.get("/", async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  });

//GET single user

router.get("/:id", async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

//PUT new user

  router.put("/", async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  });

//DELETE single user

  router.delete("/:id", async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);
      await user.destroy();
      res.json({deleted: user});
    } catch (error) {
      next(error);
    }
  });