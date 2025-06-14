"use client";

import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { MapPin, User2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { formatCurrency } from "@/app/utils/formatCurrency";
import Image from "next/image";
import { formatRelativeTime } from "@/app/utils/formatRelativeTime";

interface iAppProps {
  job: {
    id: string;
    jobTitle: string;
    salaryFrom: number;
    salaryTo: number;
    employmentType: string;
    location: string;
    createdAt: Date;
    experienceLevel: string;
    company: {
      logo: string | null;
      name: string;
      about: string;
      location: string;
    };
  };
}

const getExperienceLevelDisplay = (level: string) => {
  switch (level) {
    case "ENTRY":
      return "Entry Level";
    case "MIDDLE":
      return "Mid Level";
    case "SENIOR":
      return "Senior Level";
    default:
      return level;
  }
};

export function JobCard({ job }: iAppProps) {
  return (
    <Link href={`/job/${job.id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary relative">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-shrink-0">
              {job.company.logo ? (
                <Image
                  src={job.company.logo}
                  alt={job.company.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-lg"
                />
              ) : (
                <div className="bg-red-500 size-12 rounded-lg flex items-center justify-center">
                  <User2 className="size-6 text-white" />
                </div>
              )}
            </div>
            <div className="flex flex-col flex-grow min-w-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold truncate">{job.jobTitle}</h1>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1">
                <p className="text-sm text-muted-foreground">
                  {job.company.name}
                </p>
                <span className="hidden sm:inline text-muted-foreground text-xs">
                  •
                </span>
                <Badge className="rounded-full text-xs" variant="secondary">
                  {job.employmentType}
                </Badge>
                <span className="hidden sm:inline text-muted-foreground text-xs">
                  •
                </span>
                <Badge className="rounded-full text-xs">{job.location}</Badge>
                <span className="hidden sm:inline text-muted-foreground text-xs">
                  •
                </span>
                <Badge className="rounded-full text-xs" variant="outline">
                  {getExperienceLevelDisplay(job.experienceLevel)}
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <p className="text-sm text-muted-foreground">
                  {formatCurrency(job.salaryFrom)} - {formatCurrency(job.salaryTo)}
                </p>
                <span className="hidden sm:inline text-muted-foreground text-xs">
                  •
                </span>
                <p className="text-sm text-muted-foreground">
                  {formatRelativeTime(job.createdAt)}
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-start sm:ml-auto flex-shrink-0">
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <h1 className="text-sm sm:text-base lg:text-lg font-semibold">
                  {job.location}
                </h1>
              </div>
            </div>
          </div>
          <div className="!mt-4">
            <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
              {job.company.about}
            </p>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
