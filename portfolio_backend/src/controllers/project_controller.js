
class ProjectController {

    constructor(getAllProjectsUseCase, createProjectUseCase) {
        this.getAllProjectsUseCase = getAllProjectsUseCase;
        this.createProjectUseCase = createProjectUseCase;
        console.log(`this is value : and this is here....${JSON.stringify(this)}`);
    }

    async getAllProjects(req, res) {

        try {
            const projects = await this.getAllProjectsUseCase.execute();
            res.json(projects);

        } catch (error) {

            res.status(500).json({ error: `Internal server error... ${error}` });

        }


    }

    async createProject(req, res) {
        const { title, description, imageUrl } = req.body;

        if (!title || !description || !imageUrl) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
            const projectId = await this.createProjectUseCase.execute({ title, description, imageUrl });
            res.status(201).json({ id: projectId });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }


}

module.exports = ProjectController;