import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import RichText from "@/app/components/RichText/RichText";
import Container from "@/app/components/Container/container";
import { PrismicRichText } from "@prismicio/react";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";

/**
 * Props for `TextOnly`.
 */
export type TextOnlyProps = SliceComponentProps<Content.TextOnlySlice>;

/**
 * Component for "TextOnly" Slices.
 */
const TextOnly = ({ slice }: TextOnlyProps): JSX.Element => {
  return (
    <section
      className="flex justify-center w-fill"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className="overflow-hidden">
        <div className="md:w-[80%] lg2:w-[60%] w-fit ">
          <FadeIn
            className="w-fill [&_p]:text-navLinks [&_p]:font-regular [&_p]:font-body [&_p]:pt-fluid-12 [&_p]:text-bodyGrey
    [&_h2]:text-h2 [&_h2]:font-headline [&_h2]:font-semiBold   [&_h2]:pb-fluid-24 [&_h2]:text-headlineColor
    [&_h3]:text-h5 [&_h3]:font-body  [&_h3]:font-semiBold   [&_h3]:pt-fluid-32   [&_h3]:w-fit [&_h3]:text-orange
    [&_h4]:font-headline [&_h4]:font-semiBold [&_h4]:text-h6 [&_h4]:text-headlineColor [&_h4]:pb-fluid-20 [&_h4]:pt-fluid-16 
    [&_h5]:font-body [&_h5]:font-semiBold [&_h5]:text-buttonBlue [&_h5]:text-md [&_h5]:pt-fluid-18 
    [&_img]:py-fluid-32 [&_img]:max-h-[400px] [&_img]:w-fill [&_img]:rounded-12  [&_img]:object-cover 
    [&_a]:text-body  [&_a]:font-semiBold  [&_a]:text-buttonBlue
    [&_ul]:list-disc [&_li]:marker:text-headlineColor [&_li]:text-navLinks [&_li]:text-bodyGrey [&_li]:py-4 [&_ul]:py-8 [&_ol]:list-inside [&_ul]:list-inside [&_ol]:list-decimal [&_li]:marker:text-navLinks "
          >
            <PrismicRichText field={slice.primary.paragraph} />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default TextOnly;
