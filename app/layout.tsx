import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "daily.dev - Developer News",
  description: "Your personalized developer news platform. Get the latest tech articles, tutorials, and resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        {children}
      </body>
    </html>
  );
}
