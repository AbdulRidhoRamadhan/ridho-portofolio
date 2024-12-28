import { ProjectsData } from "../../../data/projects";

export async function generateStaticParams() {
  const projectIds = ProjectsData.map((project) => ({
    projectId: project.id.toString(),
  }));

  return projectIds;
}

export default function Layout({ children }) {
  return children;
}
