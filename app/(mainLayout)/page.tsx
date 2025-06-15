import { JobFilters } from "@/components/general/JobFilters";
import JobListings from "@/components/general/JobListings";
import JobListingsLoading from "@/components/general/JobListingsLoading";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
    jobTypes?: string;
    location?: string;
    search?: string;
    experienceLevel?: string;
    minSalary?: string;
    maxSalary?: string;
  }>;
};

export default async function Home({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const jobTypes = params.jobTypes?.split(",") || [];
  const location = params.location || "";
  const search = params.search || "";
  const experienceLevel = params.experienceLevel || "";
  const minSalary = params.minSalary ? Number(params.minSalary) : undefined;
  const maxSalary = params.maxSalary ? Number(params.maxSalary) : undefined;

  // Create a composite key from all filter parameters
  const filterKey = `page=${currentPage};types=${jobTypes.join(
    ","
  )};location=${location};search=${search};experience=${experienceLevel};minSalary=${minSalary};maxSalary=${maxSalary}`;

  return (
    <div className="flex gap-6 w-full flex-col lg:flex-row">
        <JobFilters />

        <Separator orientation="horizontal" className="w-full lg:hidden" />

        <Suspense key={filterKey} fallback={<JobListingsLoading />}>
          <JobListings
            currentPage={currentPage}
            jobTypes={jobTypes}
            location={location}
            search={search}
            experienceLevel={experienceLevel}
            minSalary={minSalary}
            maxSalary={maxSalary}
          />
        </Suspense>
    </div>
  );
}
