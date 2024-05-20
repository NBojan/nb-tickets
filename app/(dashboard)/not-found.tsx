import Link from "next/link";

const NotFound = () => {
    return (
        <section className="text-center py-12">
            <h2>There was a problem.</h2>
            <p>We could not find the page you were looking for.</p>
            <p>Go back to the <Link href="/" className="text-indigo-500">Dashboard</Link></p>
        </section>
    );
}
 
export default NotFound;