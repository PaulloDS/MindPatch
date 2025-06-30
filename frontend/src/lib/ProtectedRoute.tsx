"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/auth/sign-in");
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

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
