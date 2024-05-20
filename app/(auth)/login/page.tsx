import { AuthForm } from "@/app/components";

const Login = () => {
    return (
        <section className="py-16">
            <div className="mb-8">
                <h4 className="text-center">Log In</h4>
            </div>

            <AuthForm isLogin={true} />
        </section>
    );
}
 
export default Login;