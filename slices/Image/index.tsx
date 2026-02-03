import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  const section = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative pb-[45%] ">
        <PrismicNextImage
          field={section.image}
          className="object-cover z-0 rounded-24"
          fill
          quality={100}
          alt={""}
          sizes="(max-width: 768px) 80vw, 60vw"
        />
      </div>
    </section>
  );
};

export default Image;
