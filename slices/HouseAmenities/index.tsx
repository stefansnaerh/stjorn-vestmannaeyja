import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Image from "next/image";
import Bed from "../../public/icons/bed.svg";
import Grill from "../../public/icons/grill.svg";
import HotTub from "../../public/icons/hot-tub.svg";
import WiFi from "../../public/icons/Wifi.svg";
import Laundry from "../../public/icons/laundry.svg";
/**
 * Props for `HouseAmenities`.
 */
export type HouseAmenitiesProps =
  SliceComponentProps<Content.HouseAmenitiesSlice>;

/**
 * Component for "HouseAmenities" Slices.
 */
const HouseAmenities = ({ slice }: HouseAmenitiesProps): JSX.Element => {
  const section = slice.primary;
  return (
    <section
      className="flex justify-center bg-backgroundGreyDarker"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container morePadding className="flex flex-col gap-fluid-48">
        <FadeIn>
          <h2 className="font-headline text-headlineColor text-h2">
            Húsið inniheldur
          </h2>
        </FadeIn>
        <div className="grid grid-rows-3 xs:grid-rows-2 lg:grid-rows-1 grid-flow-col w-fill gap-fluid-32">
          <FadeIn className="col-span-1 py-fluid-32 px-fluid-48 bg-pureWhite border-[1px] border-greyDarker border-opacity-25 rounded-6 flex flex-col gap-fluid-12">
            <Image alt="rúm" src={Bed} className="h-fluid-32 " />
            <p className="font-body text-bodyGrey text-md">
              {section.svefnplass} svefnpláss
            </p>
          </FadeIn>
          {section.grill && (
            <FadeIn className="col-span-1 py-fluid-32 px-fluid-48 bg-pureWhite border-[1px] border-greyDarker border-opacity-25 rounded-6 flex flex-col gap-fluid-12">
              <Image alt="rúm" src={Grill} className="h-fluid-32 " />
              <p className="font-body text-bodyGrey text-md">Grill aðstaða</p>
            </FadeIn>
          )}
          {section.heitur_pottur && (
            <FadeIn className="col-span-1 py-fluid-32 px-fluid-48 bg-pureWhite border-[1px] border-greyDarker border-opacity-25 rounded-6 flex flex-col gap-fluid-12">
              <Image alt="rúm" src={HotTub} className="h-fluid-32 " />
              <p className="font-body text-bodyGrey text-md">Heitur pottur</p>
            </FadeIn>
          )}
          {section.internet && (
            <FadeIn className="col-span-1 py-fluid-32 px-fluid-48 bg-pureWhite border-[1px] border-greyDarker border-opacity-25 rounded-6 flex flex-col gap-fluid-12">
              <Image alt="rúm" src={WiFi} className="h-fluid-32 " />
              <p className="font-body text-bodyGrey text-md">Internet</p>
            </FadeIn>
          )}
          {section.thvottavel && (
            <FadeIn className="col-span-1 py-fluid-32 px-fluid-48 bg-pureWhite border-[1px] border-greyDarker border-opacity-25 rounded-6 flex flex-col gap-fluid-12">
              <Image alt="rúm" src={Laundry} className="h-fluid-32 " />
              <p className="font-body text-bodyGrey text-md">Þvottavél</p>
            </FadeIn>
          )}
        </div>
      </Container>
    </section>
  );
};

export default HouseAmenities;
