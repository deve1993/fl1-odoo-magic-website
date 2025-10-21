import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FL1 | Odoo Magic",
  description: "Expert Odoo development and implementation services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
