import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
  id: "my-app",
  api_key: process.env.INNGEST_API_KEY 
});
