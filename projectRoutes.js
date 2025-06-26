// backend/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

// POST new project
router.post('/', async (req, res) => {
  const { title, description, deadline } = req.body;
  try {
    const project = new Project({ title, description, deadline });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
