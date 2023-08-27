const ProjectRepository = require("../../domain/repositories/project_repository");
const pool = require('../../config/database');

class MySqlProjectRepository extends ProjectRepository {

    async getAllProjects() {
        const [rows] = await pool.query('SELECT * FROM projects');
        return rows;
    }

    async getProjectById(id) {
        const [rows] = await pool.query('SELECT * FROM projects WHERE id = ?', [id]);
        return rows[0];
    }

    async createProject(project) {
        const { title, description, imageUrl } = project;

        const [result] = await pool.execute(
            'INSERT INTO projects (title, description, imageUrl) VALUES (?, ?, ?)',
            [title, description, imageUrl]
        )

        return result.insertId;
    }
}

module.exports = MySqlProjectRepository;