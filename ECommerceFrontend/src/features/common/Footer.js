function Footer() {
  return (
    <>
     <div className="flex flex-col px-40 pt-20 pb-8 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pb-2 w-full max-w-[1120px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-8 items-center self-stretch my-auto min-w-[240px] w-[544px] max-md:max-w-full">
              <div className="grow shrink self-stretch my-auto text-2xl font-medium leading-none text-center text-white w-[105px]">
                3legant<span className="text-zinc-500">.</span>
              </div>
              <div className="flex grow shrink self-stretch my-auto w-px h-6 bg-zinc-500" />
              <div className="grow shrink self-stretch my-auto text-sm leading-loose text-gray-200 w-[350px]">
                Gift & Decoration Store
              </div>
            </div>
            <div className="flex gap-10 items-start self-stretch my-auto text-sm leading-loose text-white min-w-[240px]">
              <div>Home</div>
              <div>Shop</div>
              <div>Product</div>
              <div>Blog</div>
              <div>Contact Us</div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-start py-4 mt-12 w-full border-solid border-t-[0.5px] border-t-zinc-500 max-w-[1118px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-7 items-start text-xs font-semibold leading-loose text-white min-w-[240px] max-md:max-w-full">
            <div className="text-gray-200">
              Copyright © 2023 3legant. All rights reserved
            </div>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
          </div>
          <div className="flex gap-6 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/542b8ab12e96ddbd2032ad5b8ee15f958cdeb1edb9a9f5534c05e5c42de20985?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f"
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff840f9d1805db28c0b930701a2c7ea37a67f46ff4e43fd0251294fbaae8b048?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f"
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab371772d26092588a9e0466276a51356cae76e306c72727f1f1b41869f7c384?placeholderIfAbsent=true&apiKey=f0b6eefa523748b7b3f8933e61c61c7f"
              className="object-contain shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
