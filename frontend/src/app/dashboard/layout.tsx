import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { SidebarProvider } from "@/context/SidebarContext";
import ClientLayout from "@/components/dashboard/ClientLayout";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div
        className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 ${inter.variable}`}
      >
        <ClientLayout>{children}</ClientLayout>
      </div>
    </SidebarProvider>
  );
}
