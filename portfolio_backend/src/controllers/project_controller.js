class ProjectController {

    constructor(getAllProjectsUseCase) {
        this.getAllProjectsUseCase = getAllProjectsUseCase;
    }

    async getAllProjects(req, res) {

        try {

            const projects = await this.getAllProjectsUseCase.execute();

        } catch (error) {

            res.status(500).json({ error: `Internal server error ${error}` });

        }


    }
}

module.exports = ProjectController;