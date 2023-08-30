

const express = require('express');

const router = express.Router();

module.exports = (dependencies) => {

    const projectController = dependencies.projectController;
    router.get('/', projectController.getAllProjects.bind(projectController));
    router.post('/', projectController.createProject.bind(projectController));


    return router;

}

