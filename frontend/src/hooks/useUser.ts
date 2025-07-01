import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

export function useUser() {
  const [user, setUser] = useState<null | {
    id: number;
    nome: string;
    email: string;
  }>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/auth/users/me", {
        withCredentials: true,
      })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
