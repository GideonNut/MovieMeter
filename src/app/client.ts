import { createThirdwebClient } from "thirdweb";

// ✅ Ensure you have your Client ID set up in an `.env.local` file
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided. Set NEXT_PUBLIC_TEMPLATE_CLIENT_ID in your .env.local file.");
}

export const client = createThirdwebClient({
  clientId,
});

