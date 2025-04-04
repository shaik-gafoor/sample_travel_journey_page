import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/sample_travel_journey_page/", // Replace with your repo name, e.g., '/my-vite-app/'
});
