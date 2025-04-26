import { setupWorker, rest } from "msw";
import { Allocation } from "@/hooks/useAllocations";

const mockAllocations: Allocation[] = [
  { ticker: "IVDAR", weight: 35 },
  { ticker: "SPY",   weight: 25 },
  { ticker: "QQQ",   weight: 20 },
  { ticker: "BND",   weight: 20 },
];

export const worker = setupWorker(
  rest.get("/api/allocations", (_, res, ctx) =>
    res(ctx.status(200), ctx.json(mockAllocations)),
  ),
); 