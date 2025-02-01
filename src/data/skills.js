import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiTailwindcss,
  SiApollographql,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiSequelize,
  SiPostman,
  SiOpenai,
  SiAxios,
  SiGoogle,
  SiCss3,
  SiSass,
  SiAmazonaws,
  SiFirebase,
  SiVercel,
  SiGooglegemini,
  SiExpo,
  SiSocketdotio,
  SiJest,
  SiSupabase,
  SiGithubactions,
  SiDocker,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaGithub } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbApi, TbBrandGoogleMaps } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";

export const skillsData = {
  languages: [
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Go", icon: FaGolang },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: SiCss3 },
  ],
  frontend: [
    { name: "React JS", icon: FaReact },
    { name: "React Native", icon: FaReact },
    { name: "Next JS", icon: RiNextjsLine },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Sass", icon: SiSass },
  ],
  backend: [
    { name: "Node JS", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Next JS", icon: RiNextjsLine },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Apollo", icon: SiApollographql },
    { name: "REST API", icon: TbApi },
    { name: "JWT", icon: SiJsonwebtokens },
    { name: "Gin", icon: FaGolang },
    { name: "GORM", icon: FaGolang },
  ],
  database: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Redis", icon: SiRedis },
    { name: "Sequelize", icon: SiSequelize },
  ],
  "APIs & external services": [
    { name: "Google Maps", icon: TbBrandGoogleMaps },
    { name: "Google OAuth", icon: SiGoogle },
    { name: "OpenAI API", icon: SiOpenai },
    { name: "Gemini AI", icon: SiGooglegemini },
    { name: "Axios", icon: SiAxios },
  ],
  "cloud & deployment": [
    { name: "AWS", icon: SiAmazonaws },
    { name: "Firebase", icon: SiFirebase },
    { name: "Vercel", icon: SiVercel },
    { name: "EAS", icon: SiExpo },
    { name: "Supabase", icon: SiSupabase },
  ],
  "development tools": [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Postman", icon: SiPostman },
    { name: "Expo", icon: SiExpo },
    { name: "Socket.io", icon: SiSocketdotio },
    { name: "Jest", icon: SiJest },
  ],
  devops: [
    { name: "Docker", icon: SiDocker },
    { name: "GitHub Actions", icon: SiGithubactions },
  ],
};
