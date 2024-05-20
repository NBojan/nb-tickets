import { AuthForm } from "@/app/components";

const Register = () => {
    return (
        <section className="pt-16">
            <div className="mb-8">
                <h4 className="text-center">Register</h4>
            </div>

            <AuthForm isLogin={false} />
        </section>
    );
}
 
export default Register;