import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.jsx",
  dbCredentials: {
    url: 'postgresql://ai_owner:PZ3apuYHTEB6@ep-empty-breeze-a52kbttr.us-east-2.aws.neon.tech/qwik-key?sslmode=require'
  }
});
