import Link from "next/link";
import { Title } from "../components";
import { updates } from "@/app/utils/Updates";

const Dashboard = () => {
  return (
    <section className="py-12">
      <article className="mb-8">
        <Title title="Dashboard" />
        <p className="mb-8 text-gray-600 card-text-resp">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quam
          ex laudantium quaerat nihil inventore itaque veritatis. Adipisci
          molestias ullam eligendi fugiat sit possimus sapiente pariatur aut
          voluptas minus rem quaerat, eaque, perspiciatis saepe similique
          delectus animi sint maiores repellendus illo dolor soluta quae.
          Dignissimos soluta aliquam nam possimus magnam?
        </p>
        <div className="flex justify-center">
            <Link href="/tickets" className="btn btn-s btn-prim">View Tickets</Link>
        </div>
      </article>

        <article>
            <Title title="Company Updates" />
            <div className="space-y-4">
                {updates.map(update => (
                    <div className="bg-white p-4 rounded shadow-sm space-y-3" key={update.id}>
                        <p className="font-semibold">{update.title}</p>
                        <p className="text-gray-600 card-text-resp">{update.descr}</p>
                    </div>
                ))}
            </div>
        </article>
    </section>
  );
};

export default Dashboard;
