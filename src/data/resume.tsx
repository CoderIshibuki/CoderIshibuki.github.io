import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Tran Vu Hoa Phat",
  initials: "TV",
  url: "https://CoderIshibuki.github.io",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://www.google.com/maps/place/Ho+Chi+Minh+City",
  description:
    "Focused on Full-Stack Development, AI Engineering & Research.",
  summary:
    "I am focused on solving complex problems and writing clean, maintainable code. My passion lies at the intersection of systems architecture, algorithmic optimization, and building meaningful technologies that scale.",
  avatarUrl: "/me.png",
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "C++", icon: "cpp" },
        { name: "Python", icon: "py" },
        { name: "TypeScript", icon: "ts" },
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "Vite", icon: "vite" },
        { name: "React", icon: "react" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "FastAPI", icon: "fastapi" },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: "postgres" },
        { name: "MongoDB", icon: "mongo" },
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Linux", icon: "linux" },
        { name: "Docker", icon: "docker" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Postman", icon: "postman" },
      ]
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "tranvuhoaphat@gmail.com",
    tel: "+84338295267",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/CoderIshibuki",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:tranvuhoaphat@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "HCMUE Olympic Informatics Team",
      href: "",
      badges: [],
      location: "Ho Chi Minh City",
      title: "Member — Open Source Software Category",
      logoUrl: "/hcmue-logo.png",
      start: "Ongoing",
      end: "Present",
      description: "Member of the open source software category for the Olympic Informatics Team.",
    },
    {
      company: "HCMUE Informatics Club",
      href: "https://www.facebook.com/CLBTinHocHCMUE",
      badges: [],
      location: "Ho Chi Minh City",
      title: "Member",
      logoUrl: "/clb-tinhoc.png",
      start: "Ongoing",
      end: "Present",
      description: "Member of the HCMUE Informatics Club.",
    }
  ],
  education: [
    {
      school: "Ho Chi Minh City University of Education",
      href: "https://hcmue.edu.vn/",
      degree: "Bachelor of Information Technology",
      logoUrl: "/hcmue-logo.png",
      start: "2025",
      end: "2029",
    }
  ],
  projects: [
    {
      title: "Online Exam System",
      href: "https://github.com/CoderIshibuki/ExamTestWebsite",
      dates: "May 2026",
      active: true,
      description: "Developed an online exam system.",
      technologies: [
        "FastAPI",
        "Python",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Docker",
        "Mako",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/CoderIshibuki/ExamTestWebsite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TFT AI Assistant",
      href: "https://github.com/CoderIshibuki/",
      dates: "March 2026",
      active: true,
      description: "Built an AI assistant for Teamfight Tactics.",
      technologies: ["Python", "AI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/CoderIshibuki/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
  hackathons: [],
};
