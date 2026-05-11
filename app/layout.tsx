import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnLens – Predict Churn from Invoice Patterns",
  description: "Analyze payment timing, amount changes, and billing interactions to predict subscription churn before it happens."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bf6bd8fb-e8be-42f4-ac16-a0c6b9cfce0c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
