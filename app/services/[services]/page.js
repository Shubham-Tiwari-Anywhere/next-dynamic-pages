import { getServices } from "../../../Firebase/readData";
import { notFound } from "next/navigation";
import Image from "next/image";
const Services = async ({ params }) => {
  const data = await getServices(params.services);
  if (!data) {
    return notFound();
  }
  const { heroContent, heroHeading, heroImage } = data;
  return (
    <section className="bg-slate-900 min-h-screen py-20 md:py-28">
      <div className="space-y-8 md:space-y-0 md:flex md:justify-between max-w-[1200px] mx-auto px-4">
        <div className="space-y-4 text-slate-100 rounded-lg">
          <h1 className="text-6xl">{heroHeading}</h1>
          <p>{heroContent}</p>
        </div>
        <div>
          <img
            src={`https://source.unsplash.com/${heroImage}`}
            sizes="(max-width: 320px) 280px,
            (max-width: 768px) 450px,
            600px"
            width="600"
            height="600"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
