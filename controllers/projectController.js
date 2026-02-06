const getCollection = (req) => req.app.locals.projectsCollection;

const getProjects = async (req, res) => {
  try {
    const projects = await getCollection(req).find().toArray();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects" });
  }
};

const createProject = async (req, res) => {
  try {
    const newProject = { ...req.body, createdAt: new Date() };
    const result = await getCollection(req).insertOne(newProject);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error saving project" });
  }
};

module.exports = { getProjects, createProject };
