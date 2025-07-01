"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/users/me", {
          withCredentials: true, // garante envio do cookie
        });

        setIsAuthenticated(true);
      } catch (error) {
        console.warn("Usuário não autenticado:", error);
        setIsAuthenticated(false);
        router.replace("/auth/sign-in");
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    return (
      <div className="h-screen flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return <>{children}</>;
}
