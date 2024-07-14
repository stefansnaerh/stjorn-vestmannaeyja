import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { FadeIn } from "../FadeIn/fadeIn";
interface RichTextProps {
  text: RichTextField;
  noStyle?: boolean;
}

export default function RichText(props: RichTextProps) {
  const { text, noStyle = false } = props;
  return (
    <>
      {!noStyle ? (
        <div
          className="w-fill [&_p]:text-navLinks [&_p]:font-regular [&_p]:font-body [&_p]:pt-fluid-12 [&_p]:text-bodyGrey
    [&_h2]:text-h2 [&_h2]:font-headline [&_h2]:font-semiBold  [&_h2]:pt-fluid-40 [&_h2]:pb-fluid-40 [&_h2]:text-headlineColor
    [&_h3]:text-h5 [&_h3]:font-body  [&_h3]:font-semiBold   [&_h3]:pt-fluid-32   [&_h3]:w-fit [&_h3]:text-orange
    [&_h4]:font-headline [&_h4]:font-semiBold [&_h4]:text-h6 [&_h4]:text-headlineColor [&_h4]:pb-fluid-20 [&_h4]:pt-fluid-16 
    [&_h5]:font-body [&_h5]:font-semiBold [&_h5]:text-buttonBlue [&_h5]:text-md [&_h5]:pt-fluid-18 
    [&_img]:py-fluid-32  [&_img]:w-fill [&_img]:rounded-12  [&_img]:object-cover [&_img]:max-h-[400px]
    [&_a]:text-body  [&_a]:font-semiBold  [&_a]:text-purple
    [&_ul]:list-disc [&_li]:marker:text-headlineColor [&_li]:text-navLinks [&_li]:text-bodyGrey [&_li]:py-4 [&_ul]:py-8 [&_ol]:list-inside [&_ul]:list-inside [&_ol]:list-decimal [&_li]:marker:text-navLinks "
        >
          <PrismicRichText field={text} />
        </div>
      ) : (
        <div className="w-fill  [&_p]:text-navLinks [&_p]:font-regular [&_p]:font-body [&_p]:text-bodyGrey">
          <PrismicRichText field={text} />
        </div>
      )}
    </>
  );
}
