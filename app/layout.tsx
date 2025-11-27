import type { ReactNode } from "react";

export const metadata = {
  title: "My Frontend",
  description: "Generated from Figma",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
