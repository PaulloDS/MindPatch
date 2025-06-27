import Sidebar from "@/components/dashboard/Sidebar";
import { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "../globals.css";
import { SidebarProvider } from "@/context/SidebarContext";

const inter = Inter({
  variable: "--font-inter",
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
      <SidebarProvider>
        <div
          className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 ${inter.variable}`}
        >
          <Sidebar />
          <main className="p-6">{children}</main>
        </div>
      </SidebarProvider>
    </>
  );
}
