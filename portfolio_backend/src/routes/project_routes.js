

const express = require('express');

const ProjectController = require('../controllers/project_controller');

const router = express.Router();

module.exports = (dependencies) => {
    const projectController = new ProjectController(dependencies.getAllProjectsUseCase);
    router.get('/', projectController.getAllProjects);


    return router;

}

