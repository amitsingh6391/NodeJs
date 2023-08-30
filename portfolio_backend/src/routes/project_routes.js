

const express = require('express');

const router = express.Router();

module.exports = (dependencies) => {

    const projectController = dependencies.projectController;
    router.get('/get/', projectController.getAllProjects.bind(projectController));
    router.post('/create/', projectController.createProject.bind(projectController));


    return router;

}

