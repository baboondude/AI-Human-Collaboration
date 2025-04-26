import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}; 