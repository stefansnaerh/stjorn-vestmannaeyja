import { ReactNode } from "react";
import cx from "classnames";
interface SliceContainerProps {
  children: ReactNode;
  lessPadding?: boolean;
  className?: string;
  morePadding?: boolean;
  id?: string;
}

const Container = (props: SliceContainerProps) => {
  const {
    lessPadding = false,
    morePadding = false,
    children,
    className,
    id,
  } = props;

  return (
    <div
      id={id}
      className={cx(
        `lg:py-fluid-96 py-64  flex w-full items-center content-center max-w-screen-xxl ${className}`,
        {
          ["px-container-56"]: lessPadding,
          ["px-container-88"]: !lessPadding,
          ["px-containerMorePadding"]: morePadding,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Container;
