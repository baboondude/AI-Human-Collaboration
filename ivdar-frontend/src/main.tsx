import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

async function main() {
  if (import.meta.env.DEV) {
    const { worker } = await import("@/mocks/browser");
    await worker.start();
  }

  createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

main(); 