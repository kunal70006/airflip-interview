import Image from "next/image";

const Footer: React.FC<{ price: number }> = ({ price }) => {
  return (
    <footer className="flex sticky bottom-0 bg-brand-gray-50 border-t border-brand-gray-200 lg:px-8 xl:px-28 xl:py-6 lg:-mx-8 xl:-mx-28">
      <div className="flex gap-3 mr-8">
        <Image src="/globe.svg" alt="globe icon" height={20} width={20} />
        <div className="flex flex-col gap-1">
          <p className="text-brand-gray-900 text-sm font-medium">
            Free Shipping
          </p>
          <p className="text-brand-gray-500 text-sm">
            Get 2-day free shipping anywhere in
            <br />
            North America.
          </p>
        </div>
      </div>
      <div className="flex gap-3 grow">
        <Image src="/shield.svg" alt="shield icon" height={20} width={20} />
        <div className="flex flex-col gap-1">
          <p className="text-brand-gray-900 text-sm font-medium">
            2 Year Warranty
          </p>
          <p className="text-brand-gray-500 text-sm">
            If anything goes wrong in the first two
            <br /> years, we&apos;ll replace it for free.
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-brand-gray-900 text-3xl font-bold">${price}</p>
          <p className="text-brand-gray-500 text-sm">
            Need financing? <span className="underline">Learn more</span>
          </p>
        </div>
        <button className="rounded-md px-5 py-3 h-fit bg-brand-gray-900 hover:bg-brand-gray-700 focus:ring-1 ring-brand-gray-400 text-sm text-white">
          Buy now
        </button>
        ;
      </div>
    </footer>
  );
};

export default Footer;
