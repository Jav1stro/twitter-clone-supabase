import { AuthButtonServer } from "@/app/components/auth-button/auth-button-server";

export default function Login() {
  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">Iniciar sesión 🐦 </h1>
      {/* @ts-expect-error Server Component */}
      <AuthButtonServer />
    </section>
  );
}
