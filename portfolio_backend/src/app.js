const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//Depedencies

const MySQLProjectRepository = require('./data/repositories/my_sql_project_repository');
const GetAllProjectsUseCase = require('./domain/usecases/getall_projects_usecase');
const ProjectController = require('./controllers/project_controller');
const projectRoutes = require('./routes/project_routes');

//Intialize project Routes

const projectRepository = new MySQLProjectRepository();
const getAllProjectsUseCase = new GetAllProjectsUseCase();
const projectController = new ProjectController();

app.use('/projects', projectRoutes(projectController));

module.exports = app;

app.listen(3000);
