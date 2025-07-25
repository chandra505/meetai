"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  //   if (isLoading) {
  //     return (
  //       <LoadingState
  //         title="Loading Agents"
  //         description="This may take a few seconds..."
  //       />
  //     );
  //   }

  //   if (isError) {
  //     return (
  //       <ErrorState
  //         title="Error loading Agents"
  //         description="Please try again later"
  //       />
  //     );
  //   }

  return <div>{JSON.stringify(data, null, 2)}</div>;
};
