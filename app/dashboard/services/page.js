"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import setData from "@/util/setData";

const schema = yup
  .object()
  .shape({
    urlSlug: yup.string().required("URL slug is required"),
    heroHeading: yup.string().required("Hero heading is required"),
    heroContent: yup.string().required("Hero content is required"),
    heroImage: yup.string().required("Hero image is required"),
  })
  .required();

const ServiceDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    const { urlSlug, heroHeading, heroContent, heroImage } = data;
    setData({ urlSlug, heroHeading, heroContent, heroImage });
    reset();
  };
  return (
    <div className="flex flex-col items-center py-20 md:py-28">
      <h1 className="mb-8 text-2xl">Service Dashboard</h1>
      <form className="space-y-8" action={handleSubmit(onSubmitHandler)}>
        <div className="min-w-96 flex justify-between items-start gap-10">
          <label htmlFor="">Url Slug</label>
          <div className="relative">
            <input
              type="text"
              name="urlSlug"
              placeholder="Url Slug"
              className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
              {...register("urlSlug")}
            />
            <p className="text-xs text-red-600 absolute bottom-[-20px]">
              {errors.urlSlug?.message}
            </p>
          </div>
        </div>
        <div className="min-w-96 flex justify-between items-start gap-10">
          <label htmlFor="">Hero heading</label>
          <div className="relative">
            <input
              type="text"
              name="heroHeading"
              placeholder="Hero heading"
              className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
              {...register("heroHeading")}
            />
            <p className="text-xs text-red-600 absolute bottom-[-20px]">
              {errors.heroHeading?.message}
            </p>
          </div>
        </div>
        <div className="min-w-96 flex justify-between items-start gap-10">
          <label htmlFor="">Hero Content</label>
          <div className="relative">
            <input
              type="text"
              name="heroContent"
              placeholder="Hero Content"
              className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
              {...register("heroContent")}
            />
            <p className="text-xs text-red-600 absolute bottom-[-20px]">
              {errors.heroContent?.message}
            </p>
          </div>
        </div>
        <div className="min-w-96 flex justify-between items-start gap-10">
          <label htmlFor="">Hero Image</label>
          <div className="relative">
            <input
              type="text"
              name="heroImage"
              placeholder="Hero Image"
              className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
              {...register("heroImage")}
            />
            <p className="text-xs text-red-600 absolute bottom-[-20px]">
              {errors.heroImage?.message}
            </p>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-10 px-4 py-2 rounded-lg bg-green-500 text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default ServiceDashboard;
