import React from "react"
import { DotsHorizontalIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { GitBranchIcon } from "lucide-react"
import { TbActivityHeartbeat } from "react-icons/tb"

import VercelSvg from "./svg/vercel-svg"
import { Card, CardContent } from "./ui/card"

const projectData: ProjectCardProps[] = [
  {
    title: "E-commerce Website",
    link: "ecommerce-website.vercel.app",
    githubRepo: "a0/ecommerce-website",
    lastCommit: "Added product search functionality",
    lastCommitTime: "2d",
  },
  {
    title: "Task Management App",
    link: "task-management-app.vercel.app",
    githubRepo: "a0/task-management-app",
    lastCommit: "Implemented user authentication",
    lastCommitTime: "5h",
  },
  {
    title: "Blog Platform",
    link: "blog-platform.vercel.app",
    githubRepo: "a0/blog-platform",
    lastCommit: "Fixed styling issues on mobile devices",
    lastCommitTime: "1d",
  },
  {
    title: "Fitness Tracker",
    link: "fitness-tracker.vercel.app",
    githubRepo: "a0/fitness-tracker",
    lastCommit: "Added calorie tracking feature",
    lastCommitTime: "3d",
  },
  {
    title: "Recipe Sharing Website",
    link: "recipe-sharing-website.vercel.app",
    githubRepo: "a0/recipe-sharing-website",
    lastCommit: "Implemented user profile pages",
    lastCommitTime: "6h",
  },
  {
    title: "Online Learning Platform",
    link: "online-learning-platform.vercel.app",
    githubRepo: "a0/online-learning-platform",
    lastCommit: "Optimized database queries",
    lastCommitTime: "4d",
  },
  {
    title: "Social Media App",
    link: "social-media-app.vercel.app",
    githubRepo: "a0/social-media-app",
    lastCommit: "Fixed messaging functionality",
    lastCommitTime: "2d",
  },
  {
    title: "Travel Blog",
    link: "travel-blog.vercel.app",
    githubRepo: "a0/travel-blog",
    lastCommit: "Added photo gallery feature",
    lastCommitTime: "1d",
  },
  {
    title: "Weather Forecast Application",
    link: "weather-forecast-app.vercel.app",
    githubRepo: "a0/weather-forecast-app",
    lastCommit: "Implemented caching for weather data",
    lastCommitTime: "3d",
  },
  {
    title: "Event Management System",
    link: "event-management-system.vercel.app",
    githubRepo: "a0/event-management-system",
    lastCommit: "Fixed event registration bug",
    lastCommitTime: "2h",
  },
  {
    title: "Job Search Platform",
    link: "job-search-platform.vercel.app",
    githubRepo: "a0/job-search-platform",
    lastCommit: "Updated job listing UI",
    lastCommitTime: "1d",
  },
  {
    title: "Music Streaming Service",
    link: "music-streaming-service.vercel.app",
    githubRepo: "a0/music-streaming-service",
    lastCommit: "Added playlist sharing feature",
    lastCommitTime: "2d",
  },
]

type Props = {}

export default function ProjectSection({}: Props) {
  return (
    <div className="grid grid-cols-1  gap-5 transition-all md:grid-cols-2 xl:grid-cols-3 ">
      {projectData.map((d, i) => (
        <ProjectCard
          key={i}
          title={d.title}
          link={d.link}
          githubRepo={d.githubRepo}
          lastCommit={d.lastCommit}
          lastCommitTime={d.lastCommitTime}
        />
      ))}
    </div>
  )
}

interface ProjectCardProps {
  title: string
  link: string
  githubRepo: string
  lastCommit: string
  lastCommitTime: string
}

function ProjectCard(props: ProjectCardProps) {
  const { title, link, githubRepo, lastCommit, lastCommitTime } = props

  return (
    <Card>
      <CardContent className="pt-4">
        <section className="flex items-center justify-between">
          <section className="flex items-center space-x-4 text-sm">
            <div className="flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded-full border">
              <VercelSvg className="h-3" />
            </div>

            <div>
              <div className="font-medium">{title}</div>
              <div className="text-muted-foreground">{link}</div>
            </div>
          </section>

          <section className="flex items-center gap-3">
            <button className="flex size-8 items-center justify-center rounded-full border-2 text-xl">
              <TbActivityHeartbeat className="text-muted-foreground" />
            </button>
            <button className="flex h-7 w-6 items-center justify-center rounded-md">
              <DotsHorizontalIcon />
            </button>
          </section>
        </section>

        <button className="mt-4 flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-1 text-sm">
          <GitHubLogoIcon />
          <p className="max-w-52 overflow-hidden text-ellipsis whitespace-nowrap">
            {githubRepo}
          </p>
        </button>

        <div className="mt-4 text-sm text-muted-foreground">
          <p className="transition-all hover:underline">{lastCommit}</p>
          <p className="flex items-center gap-1">
            <span>{lastCommitTime} ago on</span>
            <GitBranchIcon className="size-4" />
            <span className="font-mono">main</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
