"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import  supabase  from "../../../utils/supabase-client";

export default function AdminLogin()  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        router.push("/admin/admin-dashboard");
      }
    }
    checkUser();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    setLoading(false);
  
    if (authError) {
      setError(authError.message || "Invalid email or password");
      return;
    }
  
    console.log("User authenticated:", data);
    router.push("/admin/admin-dashboard");
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="w-full max-w-sm p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button
  type="submit"
  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
  disabled={loading}
>
  {loading ? "Logging in..." : "Login"}
</button>

      </form>
    </div></>
  );
};
