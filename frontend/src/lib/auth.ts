export async function registerUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const res = await fetch("http://localhost:8080/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Erro ao registrar usuário");
  }

  return await res.json();
}
