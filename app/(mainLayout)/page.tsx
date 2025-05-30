import { JobFilters } from "@/components/general/JobFilters";
import JobListings from "@/components/general/JobListings";
import JobListingsLoading from "@/components/general/JobListingsLoading";
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
    <div className="grid grid-cols-3 gap-8">
      <JobFilters />
      <div className="col-span-2 flex flex-col gap-6">
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
    </div>
  );
}
