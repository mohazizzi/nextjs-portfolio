import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "نمونه کارهای من",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
