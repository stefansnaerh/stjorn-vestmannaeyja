import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceOverview`.
 */
export type ServiceOverviewProps =
  SliceComponentProps<Content.ServiceOverviewSlice>;

/**
 * Component for "ServiceOverview" Slices.
 */
const ServiceOverview = ({ slice }: ServiceOverviewProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for service_overview (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ServiceOverview;
