import Sidebar from "@/components/dashboard/Sidebar";
import { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindPatch",
  description: "MindPatch - Your AI-Powered Mind Mapping Tool",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
          <Sidebar />
          <main className="p-6">{children}</main>
      </div>
    </>
  );
}
