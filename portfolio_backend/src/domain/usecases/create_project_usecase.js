// src/domain/usecases/CreateProjectUseCase.js

class CreateProjectUseCase {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }

    async execute(projectData) {
        // Validate projectData if needed
        return this.projectRepository.createProject(projectData);
    }
}

module.exports = CreateProjectUseCase;
