import "./style.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "محمدرضا عزیزی - برنامه نویس وب",
  description:
    "توسعه دهنده وب با انگیزه به دنبال نقشی به عنوان توسعه دهنده فرانت",
};

const myFont = localFont({
  src: "../public/fonts/iran-sans/IRANSans-Medium-web.woff",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body style={myFont.style}>
        <Header />
        {children}
      </body>
    </html>
  );
}
