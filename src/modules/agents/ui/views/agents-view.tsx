"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import { AgentGetOne } from "../../types";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data }: AgentGetOne = useSuspenseQuery(
    trpc.agents.getMany.queryOptions()
  );

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data} columns={columns} />
    </div>
  );
};
