import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Arrow from "../../public/icons/ArrowRight.svg";
export type ButtonProps = SliceComponentProps<Content.ButtonSlice>;

const Button = ({ slice }: ButtonProps): JSX.Element => {
  const section = slice.primary;
  return (
    <div className="">
      <PrismicNextLink
        field={section.button_link}
        aria-label={"til að sjá allar fréttir"}
        className="group text-[16px] bg-pureWhite hover:bg-buttonBlue border-[1px]  hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32   gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out"
      >
        {section.button_text}
        <div className="p-12  bg-pureWhite  w-fit rounded-full transition-all duration-300 ease-in-out">
          <Arrow className="text-buttonBlue  h-[14px]  transition-all duration-300 ease-in-out " />
        </div>
      </PrismicNextLink>
    </div>
  );
};

export default Button;
