import { setupWorker } from "msw/browser";
import { http, HttpResponse } from "msw";
import { Allocation } from "@/hooks/useAllocations";

const mockAllocations: Allocation[] = [
  { ticker: "IVDAR", weight: 35 },
  { ticker: "SPY",   weight: 25 },
  { ticker: "QQQ",   weight: 20 },
  { ticker: "BND",   weight: 20 },
];

export const worker = setupWorker(
  http.get("/api/allocations", () => {
    return HttpResponse.json(mockAllocations);
  }),
); 