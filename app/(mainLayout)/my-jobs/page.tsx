import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, PenBoxIcon, User2, XCircle } from "lucide-react";
import Link from "next/link";

import { EmptyState } from "@/components/general/EmptyState";
import { prisma } from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { CopyLinkMenuItem } from "@/components/general/CopyLink";

async function getJobs(userId: string) {
  const data = await prisma.jobPost.findMany({
    where: {
      company: {
        userId: userId,
      },
    },
    select: {
      id: true,
      jobTitle: true,
      status: true,
      createdAt: true,
      applications: true,
      company: {
        select: {
          name: true,
          logo: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

const MyJobs = async () => {
  const session = await requireUser();
  const data = await getJobs(session.id as string);

  return (
    <>
      {data.length === 0 ? (
        <EmptyState
          title="No job posts found"
          description="You don't have any job posts yet."
          buttonText="Create a job post"
          href="/post-job"
        />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>My Jobs</CardTitle>
            <CardDescription>
              Manage your job listings and applications here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Logo</TableHead>
                    <TableHead className="min-w-[120px]">Company</TableHead>
                    <TableHead className="min-w-[150px]">Job Title</TableHead>
                    <TableHead className="min-w-[100px]">Status</TableHead>
                    <TableHead className="min-w-[100px]">Applicants</TableHead>
                    <TableHead className="min-w-[120px]">Created On</TableHead>
                    <TableHead className="text-right min-w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
              <TableBody>
                {data.map((listing: any) => (
                  <TableRow key={listing.id}>
                    <TableCell>
                      {listing.company.logo ? (
                        <Image
                          src={listing.company.logo}
                          alt={`${listing.company.name} logo`}
                          width={40}
                          height={40}
                          className="rounded-md size-10"
                        />
                      ) : (
                        <div className="bg-red-500 size-10 rounded-lg flex items-center justify-center">
                          <User2 className="size-6 text-white" />
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">
                      {listing.company.name}
                    </TableCell>
                    <TableCell>{listing.jobTitle}</TableCell>
                    <TableCell>
                      {listing.status.charAt(0).toUpperCase() +
                        listing.status.slice(1).toLowerCase()}
                    </TableCell>
                    <TableCell>{listing.applications}</TableCell>
                    <TableCell>
                      {listing.createdAt.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem asChild>
                            <Link href={`/my-jobs/${listing.id}/edit`}>
                              <PenBoxIcon className="size-4" />
                              Edit Job
                            </Link>
                          </DropdownMenuItem>
                          <CopyLinkMenuItem
                            jobUrl={`${process.env.NEXT_PUBLIC_URL}/job/${listing.id}`}
                          />
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href={`/my-jobs/${listing.id}/delete`}>
                              <XCircle className="h-4 w-4" />
                              Delete Job
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default MyJobs;
