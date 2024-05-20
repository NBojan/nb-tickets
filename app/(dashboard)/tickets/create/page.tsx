import { CreateForm, Title } from "@/app/components";

const CreateTicket = () => {
    return (
        <section className="py-12">
            <article className="text-center mb-8">
                <Title title="Add a New Ticket" />
            </article>

            <CreateForm />
        </section>
    );
}
 
export default CreateTicket;