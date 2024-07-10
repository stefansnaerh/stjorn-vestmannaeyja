import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Board`.
 */
export type BoardProps = SliceComponentProps<Content.BoardSlice>;

/**
 * Component for "Board" Slices.
 */
const Board = ({ slice }: BoardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for board (variation: {slice.variation}) Slices
    </section>
  );
};

export default Board;
