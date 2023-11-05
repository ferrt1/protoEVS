/* eslint-disable react/prop-types */ 

export const Excursion = ({image, title, description, price}) => {
  return (
    <div className="md:p-8 p-2 bg-white h-[100%] border rounded-xl">
      <img
        className="rounded-lg w-full  object-cover mb-2"
        src= {image}
      />

      <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate py-3">
        {title}
      </h1>

      <div className="max-w-full">
        <p className="text-[12px] md:text-base font-medium tracking-wide text-gray-600 mt-1">
          {description}
        </p>
        <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
          {price}
        </p>
      </div>
    </div>
  );
};
