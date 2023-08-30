const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//Depedencies

const MySQLProjectRepository = require('./data/repositories/my_sql_project_repository');
const GetAllProjectsUseCase = require('./domain/usecases/getall_projects_usecase');
const CreateProjectUseCase = require('./domain/usecases/create_project_usecase');
const ProjectController = require('./controllers/project_controller');
const projectRoutes = require('./routes/project_routes');


//Intialize project Routes

const projectRepository = new MySQLProjectRepository();
const getAllProjectsUseCase = new GetAllProjectsUseCase(projectRepository);
const createProjectUseCase = new CreateProjectUseCase(projectRepository);

const dependencies = {
    getAllProjectsUseCase,
    createProjectUseCase, // Add createProjectUseCase to dependencies
};

const projectController = new ProjectController(getAllProjectsUseCase, createProjectUseCase);


app.use('/projects', projectRoutes({ projectController }));

module.exports = app;


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
