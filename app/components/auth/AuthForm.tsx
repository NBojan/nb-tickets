"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthForm = ({ isLogin } : { isLogin:boolean }) => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        if(loading) return;
        
        setLoading(true);
        setError(null);
        const supabase = createClientComponentClient();

        if(isLogin){
            const { error } = await supabase.auth.signInWithPassword({email, password});
            console.log(error)
            if(error) setError(error.message);
            else {
                router.push("/");
                setError(null);
                setEmail("");
                setPassword("");
            }
        }
        else {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${location.origin}/api/auth/code-session`
                }
            });
            if(error) setError(error.message);
            else {
                router.push("/verify");
                setError(null);
                setEmail("");
                setPassword("");
            }
        }
        setLoading(false)
    }

    return (
        <form className="w-[90%] max-w-[400px] mx-auto bg-indigo-200 rounded p-4 sm:p-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block space-y-2">
                <p className="">Email:</p>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-input" required />
            </label>

            <label className="block space-y-2">
                <p className="">Password:</p>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-input" required />
            </label>

            <div className="flex flex-col items-center space-y-2">
                {error && <p className="text-red-600">{error}</p>}  
                <button type="submit" disabled={loading} className="btn btn-m btn-prim">
                    {loading ? "Loading..." : "Submit"}
                </button>
            </div>
        </form>
    );
}
 
export default AuthForm;