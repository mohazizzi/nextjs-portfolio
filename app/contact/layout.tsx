import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ارتباط با من",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
