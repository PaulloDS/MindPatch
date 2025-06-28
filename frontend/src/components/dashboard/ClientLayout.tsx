"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import { useSidebar } from "@/context/SidebarContext";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setSidebarOpen } = useSidebar();

  return (
    <>
      <Sidebar />
      <main className="p-6 ">
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <div className="flex justify-between pb-6 lg:pl-80">
          <div className="w-[400px] relative md:block">
            <span className="absolute ml-3 top-[10px]">🔍</span>
            <Input
              className="w-full p-5 pl-9 font-medium border-green-700 md:w-[300px] lg:w-[600px]"
              placeholder="Buscar por desafios, usuários ..."
              type="text"
            />
          </div>
          <div className="flex items-center space-x-5">
            <Button className="py-5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-200 hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
              ➕ Novo Desafio
            </Button>
            <Button className="bg-gradient-to-r from-emerald-400 to-emerald-600 py-5 hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-200 hover:cursor-pointer rounded-full">
              ➕ Novo Patch
            </Button>
            <Button className="bg-blue-400 w-[40px] rounded-full hover:bg-gray-500 hover:cursor-pointer">
              🔔
            </Button>
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
