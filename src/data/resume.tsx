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
    "C++",
    "Python",
    "TypeScript",
    "FastAPI",
    "Uvicorn",
    "Vite",
    "PostgreSQL",
    "MongoDB",
    "Linux",
    "Docker",
    "Git",
    "GitHub",
    "Postman",
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
      href: "#",
      badges: [],
      location: "Ho Chi Minh City",
      title: "Member — Open Source Software Category",
      logoUrl: "",
      start: "Ongoing",
      end: "Present",
      description: "Member of the open source software category for the Olympic Informatics Team.",
    },
    {
      company: "HCMUE Informatics Club",
      href: "#",
      badges: [],
      location: "Ho Chi Minh City",
      title: "Member",
      logoUrl: "",
      start: "Ongoing",
      end: "Present",
      description: "Member of the HCMUE Informatics Club.",
    }
  ],
  education: [
    {
      school: "Ho Chi Minh City University of Education",
      href: "#",
      degree: "Bachelor of Information Technology",
      logoUrl: "",
      start: "2025",
      end: "2029",
    }
  ],
  projects: [
    {
      title: "Online Exam System",
      href: "#",
      dates: "May 2026",
      active: true,
      description: "Developed an online exam system.",
      technologies: ["FastAPI", "React", "PostgreSQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "TFT AI Assistant",
      href: "#",
      dates: "March 2026",
      active: true,
      description: "Built an AI assistant for Teamfight Tactics.",
      technologies: ["Python", "AI"],
      links: [],
      image: "",
      video: "",
    }
  ],
  hackathons: [],
};
