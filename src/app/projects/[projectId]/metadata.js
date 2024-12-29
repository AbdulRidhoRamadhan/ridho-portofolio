import { ProjectsData } from "../../../data/projects";

export async function generateMetadata({ params }) {
  const project = ProjectsData.find(
    (p) => p.id.toString() === params.projectId
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for doesn't exist.",
    };
  }

  return {
    title: `${project.title} - A Ridho Ramadhan`,
    description: project.studycase,
    openGraph: {
      title: `${project.title} - A Ridho Ramadhan`,
      description: project.studycase,
      images: [
        {
          url: project.modal,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - A Ridho Ramadhan`,
      description: project.studycase,
      images: [project.modal],
    },
  };
}
