import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import Reynsla from "../../public/icons/reynsla.svg";
import Medlimir from "../../public/icons/medlimir.svg";
import House from "../../public/icons/house.svg";
/**
 * Props for `WhyUsOverview`.
 */
export type WhyUsOverviewProps =
  SliceComponentProps<Content.WhyUsOverviewSlice>;

/**
 * Component for "WhyUsOverview" Slices.
 */
const WhyUsOverview = ({ slice }: WhyUsOverviewProps): JSX.Element => {
  const section = slice.primary;

  const startYear = 1938;
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - startYear;

  return (
    <Container lessPadding>
      <section
        className=" flex flex-col gap-fluid-56 w-fill"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <FadeIn className="self-center gap-fluid-32 hidden sm:flex md:gap-fluid-96  w-fit rounded-12 justify-center  ">
          <FadeIn className="flex gap-fluid-16  border-[1px] border-greyInput border-opacity-20 bg-pureWhite rounded-6 py-fluid-32 px-[10%]">
            <div className="flex self-center bg-greyLight py-fluid-12 px-fluid-12  w-fluid-56 h-fluid-56 xs:h-fluid-72 xs:w-fluid-72 rounded-[50%]">
              <svg
                width="100%"
                height="100%"
                className="h-fluid-32 xs:h-fluid-56 self-center text-buttonBlue"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_109_389)">
                  <path
                    opacity="0.2"
                    d="M21.5 12.5C21.5 13.9834 21.0601 15.4334 20.236 16.6668C19.4119 17.9001 18.2406 18.8614 16.8701 19.4291C15.4997 19.9968 13.9917 20.1453 12.5368 19.8559C11.082 19.5665 9.7456 18.8522 8.6967 17.8033C7.64781 16.7544 6.9335 15.418 6.64411 13.9632C6.35472 12.5083 6.50325 11.0003 7.07091 9.62987C7.63856 8.25943 8.59986 7.08809 9.83323 6.26398C11.0666 5.43987 12.5166 5 14 5C15.9891 5 17.8968 5.79018 19.3033 7.1967C20.7098 8.60322 21.5 10.5109 21.5 12.5Z"
                    fill="white"
                  />
                  <path
                    d="M32.4997 17.0001C32.4997 17.2653 32.3943 17.5197 32.2068 17.7072C32.0193 17.8948 31.7649 18.0001 31.4997 18.0001H29.4997V20.0001C29.4997 20.2653 29.3943 20.5197 29.2068 20.7072C29.0193 20.8948 28.7649 21.0001 28.4997 21.0001C28.2345 21.0001 27.9801 20.8948 27.7926 20.7072C27.605 20.5197 27.4997 20.2653 27.4997 20.0001V18.0001H25.4997C25.2345 18.0001 24.9801 17.8948 24.7926 17.7072C24.605 17.5197 24.4997 17.2653 24.4997 17.0001C24.4997 16.7349 24.605 16.4805 24.7926 16.293C24.9801 16.1055 25.2345 16.0001 25.4997 16.0001H27.4997V14.0001C27.4997 13.7349 27.605 13.4805 27.7926 13.293C27.9801 13.1055 28.2345 13.0001 28.4997 13.0001C28.7649 13.0001 29.0193 13.1055 29.2068 13.293C29.3943 13.4805 29.4997 13.7349 29.4997 14.0001V16.0001H31.4997C31.7649 16.0001 32.0193 16.1055 32.2068 16.293C32.3943 16.4805 32.4997 16.7349 32.4997 17.0001ZM25.2659 24.3564C25.4367 24.5596 25.5197 24.8223 25.4967 25.0867C25.4737 25.3512 25.3466 25.5956 25.1434 25.7664C24.9402 25.9371 24.6775 26.0201 24.4131 25.9971C24.1486 25.9742 23.9042 25.8471 23.7334 25.6439C21.2184 22.6489 17.7609 21.0001 13.9997 21.0001C10.2384 21.0001 6.78093 22.6489 4.26593 25.6439C4.09519 25.8469 3.85079 25.9738 3.58648 25.9967C3.32217 26.0196 3.05961 25.9365 2.85655 25.7657C2.65349 25.595 2.52658 25.3506 2.50372 25.0863C2.48087 24.822 2.56394 24.5594 2.73468 24.3564C4.60218 22.1339 6.92468 20.5551 9.50593 19.7101C7.93831 18.7337 6.73133 17.2734 6.06759 15.55C5.40386 13.8265 5.31949 11.9338 5.82724 10.1582C6.33499 8.38254 7.40724 6.82057 8.88176 5.70859C10.3563 4.59661 12.1529 3.99512 13.9997 3.99512C15.8465 3.99512 17.6431 4.59661 19.1176 5.70859C20.5921 6.82057 21.6644 8.38254 22.1721 10.1582C22.6799 11.9338 22.5955 13.8265 21.9318 15.55C21.268 17.2734 20.061 18.7337 18.4934 19.7101C21.0747 20.5551 23.3972 22.1339 25.2659 24.3564ZM13.9997 19.0001C15.2853 19.0001 16.542 18.6189 17.6109 17.9047C18.6798 17.1904 19.5129 16.1753 20.0049 14.9876C20.4969 13.7998 20.6256 12.4929 20.3748 11.232C20.124 9.97115 19.5049 8.81296 18.5959 7.90392C17.6868 6.99488 16.5286 6.37582 15.2678 6.12501C14.0069 5.87421 12.7 6.00293 11.5122 6.4949C10.3245 6.98687 9.30935 7.81999 8.59512 8.88891C7.88089 9.95783 7.49968 11.2145 7.49968 12.5001C7.50166 14.2234 8.18712 15.8756 9.40567 17.0941C10.6242 18.3127 12.2764 18.9981 13.9997 19.0001Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_109_389">
                    <rect
                      width="32"
                      height="32"
                      fill="currentColor"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-fluid-6 self-center">
              <h3 className="text-buttonBlue font-body text-h6">
                {section.members}
              </h3>
              <p className="font-body text-bodyGrey text-sm ">Meðlimir</p>
            </div>
          </FadeIn>

          <FadeIn className="flex gap-fluid-16  border-[1px] border-greyInput border-opacity-20 bg-pureWhite rounded-6 py-fluid-32 px-[10%]">
            <div className="flex self-center bg-greyLight py-fluid-12 px-fluid-12  w-fluid-56 h-fluid-56 xs:h-fluid-72 xs:w-fluid-72 rounded-[50%]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 256 256"
                className="h-fluid-32 xs:h-fluid-56 text-buttonBlue self-center"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M240 210H222V131.17L227.76 136.93C228.889 138.039 230.411 138.658 231.993 138.651C233.576 138.643 235.092 138.011 236.211 136.891C237.329 135.771 237.96 134.254 237.965 132.671C237.971 131.089 237.351 129.568 236.24 128.44L137.9 30.09C136.6 28.7899 135.057 27.7585 133.358 27.0548C131.659 26.3512 129.839 25.989 128 25.989C126.161 25.989 124.341 26.3512 122.642 27.0548C120.943 27.7585 119.4 28.7899 118.1 30.09L19.76 128.44C18.6492 129.568 18.029 131.089 18.0345 132.671C18.04 134.254 18.6708 135.771 19.7893 136.891C20.9079 138.011 22.4237 138.643 24.0066 138.651C25.5894 138.658 27.111 138.039 28.24 136.93L34 131.17V210H16C14.4087 210 12.8826 210.632 11.7574 211.757C10.6321 212.883 10 214.409 10 216C10 217.591 10.6321 219.117 11.7574 220.243C12.8826 221.368 14.4087 222 16 222H240C241.591 222 243.117 221.368 244.243 220.243C245.368 219.117 246 217.591 246 216C246 214.409 245.368 212.883 244.243 211.757C243.117 210.632 241.591 210 240 210ZM46 119.17L126.58 38.58C126.766 38.3926 126.987 38.2438 127.231 38.1422C127.475 38.0407 127.736 37.9884 128 37.9884C128.264 37.9884 128.525 38.0407 128.769 38.1422C129.013 38.2438 129.234 38.3926 129.42 38.58L210 119.17V210H158V152C158 150.409 157.368 148.883 156.243 147.757C155.117 146.632 153.591 146 152 146H104C102.409 146 100.883 146.632 99.7574 147.757C98.6321 148.883 98 150.409 98 152V210H46V119.17ZM146 210H110V158H146V210Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-fluid-6 self-center">
              <h3 className="text-buttonBlue font-body text-h6">
                {section.houses}
              </h3>
              <p className="font-body text-bodyGrey text-sm">Orlofskostir</p>
            </div>
          </FadeIn>
          <FadeIn className="flex gap-fluid-16  border-[1px] border-greyInput border-opacity-20 bg-pureWhite rounded-6 py-fluid-32 px-[10%]">
            <div className="flex self-center bg-greyLight py-fluid-12 px-fluid-12  w-fluid-56 h-fluid-56 xs:h-fluid-72 xs:w-fluid-72 rounded-[50%]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 42 42"
                className="h-fluid-32 xs:h-fluid-56 text-buttonBlue self-center"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_225_2049)">
                  <path
                    d="M37.7885 23.1428C37.3593 22.812 36.8673 22.5721 36.3424 22.4375C35.8175 22.303 35.2707 22.2767 34.7353 22.3602C37.8164 19.2496 39.375 16.157 39.375 13.1252C39.375 8.78242 35.8821 5.25015 31.5886 5.25015C30.4494 5.243 29.3224 5.4853 28.2867 5.96003C27.2511 6.43477 26.3319 7.13044 25.5938 7.9982C24.8556 7.13044 23.9364 6.43477 22.9008 5.96003C21.8651 5.4853 20.7381 5.243 19.5989 5.25015C15.3054 5.25015 11.8125 8.78242 11.8125 13.1252C11.8125 14.9298 12.3441 16.6837 13.463 18.5392C12.5466 18.7714 11.7103 19.2477 11.043 19.9173L7.33195 23.6252H2.625C1.92881 23.6252 1.26113 23.9017 0.768845 24.394C0.276562 24.8863 0 25.554 0 26.2502L0 32.8127C0 33.5088 0.276562 34.1765 0.768845 34.6688C1.26113 35.1611 1.92881 35.4377 2.625 35.4377H19.6875C19.7948 35.4377 19.9017 35.4245 20.0058 35.3983L30.5058 32.7733C30.5727 32.7573 30.6381 32.7354 30.701 32.7077L37.0781 29.9941L37.1503 29.9612C37.7632 29.655 38.288 29.1978 38.6754 28.6326C39.0627 28.0675 39.2998 27.413 39.3643 26.7309C39.4288 26.0488 39.3186 25.3615 39.044 24.7338C38.7695 24.106 38.3397 23.5585 37.7951 23.1428H37.7885ZM19.5989 7.87515C20.6155 7.86028 21.6133 8.14893 22.465 8.70421C23.3166 9.25949 23.9833 10.0562 24.3797 10.9923C24.4786 11.2331 24.6468 11.439 24.863 11.5839C25.0791 11.7288 25.3335 11.8061 25.5938 11.8061C25.854 11.8061 26.1084 11.7288 26.3245 11.5839C26.5407 11.439 26.7089 11.2331 26.8078 10.9923C27.2042 10.0562 27.8709 9.25949 28.7225 8.70421C29.5742 8.14893 30.572 7.86028 31.5886 7.87515C34.3859 7.87515 36.75 10.2787 36.75 13.1252C36.75 16.326 34.1595 19.9469 29.2589 23.6087L27.4395 24.0271C27.5992 23.3525 27.6041 22.6504 27.4539 21.9736C27.3037 21.2968 27.0022 20.6628 26.5721 20.119C26.142 19.5753 25.5944 19.1359 24.9704 18.8339C24.3463 18.5319 23.662 18.3751 22.9688 18.3752H16.5178C15.102 16.4655 14.4375 14.7855 14.4375 13.1252C14.4375 10.2787 16.8016 7.87515 19.5989 7.87515ZM2.625 26.2502H6.5625V32.8127H2.625V26.2502ZM36.0002 27.5971L29.7659 30.2516L19.5234 32.8127H9.1875V25.4807L12.9002 21.7696C13.1431 21.5248 13.4322 21.3307 13.7508 21.1986C14.0693 21.0665 14.4109 20.9991 14.7558 21.0002H22.9688C23.4909 21.0002 23.9917 21.2076 24.3609 21.5768C24.7301 21.946 24.9375 22.4468 24.9375 22.9689C24.9375 23.491 24.7301 23.9918 24.3609 24.361C23.9917 24.7302 23.4909 24.9377 22.9688 24.9377H18.375C18.0269 24.9377 17.6931 25.0759 17.4469 25.3221C17.2008 25.5682 17.0625 25.9021 17.0625 26.2502C17.0625 26.5982 17.2008 26.9321 17.4469 27.1782C17.6931 27.4244 18.0269 27.5627 18.375 27.5627H23.625C23.7238 27.5624 23.8223 27.5514 23.9187 27.5298L34.9109 25.0016L34.9617 24.9885C35.2973 24.8954 35.6554 24.9296 35.9673 25.0846C36.2791 25.2397 36.5226 25.5045 36.6509 25.8283C36.7791 26.1521 36.7832 26.5118 36.6621 26.8384C36.5411 27.1649 36.3036 27.4352 35.9953 27.5971H36.0002Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_225_2049">
                    <rect width="42" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-fluid-6 self-center">
              <h3 className="text-buttonBlue font-body text-h6">
                {yearsActive}
              </h3>
              <p className="font-body text-bodyGrey text-sm whitespace-nowrap">
                ára reynsla
              </p>
            </div>
          </FadeIn>
        </FadeIn>
        <div className="flex flex-col lg:w-[90%] xl:w-[80%] lg:self-center sm:grid grid-cols-2 grid-rows-2 justify-center gap-fluid-32">
          {section.title_and_text_items.map((item, i) => {
            // const iconToShow = (iconText: KeyTextField | void) => {
            //   if (iconText === "Launavernd") {
            //     return (
            //       <Image
            //         className="h-fluid-40 lg:h-fluid-48  self-start"
            //         alt="Manns icon"
            //         src={launavernd}
            //       />
            //     );
            //   } else if (iconText === "Menntastyrkir") {
            //     return (
            //       <Image
            //         className="h-fluid-40 lg:h-fluid-48  self-start"
            //         alt="Manns icon"
            //         src={menntastyrkir}
            //       />
            //     );
            //   } else if (iconText === "Heilsutengdir styrkir") {
            //     return (
            //       <Image
            //         className="h-fluid-40 lg:h-fluid-48  self-start"
            //         alt="Manns icon"
            //         src={heilsustyrkir}
            //       />
            //     );
            //   } else
            //     return (
            //       <Image
            //         className="h-fluid-40 lg:h-fluid-48  self-start"
            //         alt="Manns icon"
            //         src={sjukrasjodur}
            //       />
            //     );
            // };
            return (
              <FadeIn
                className="sm:w-fill sm:h-fill xs:w-[80%]   self-center w-[90%] rounded-12 flex flex-col gap-fluid-24 bg-white  py-fluid-32 sm:py-fluid-40 px-fluid-32 xs:px-fluid-40 sm:px-fluid-56 border-[1px] border-greyInput border-opacity-20"
                key={`${i}${item.title}`}
              >
                <h4 className="text-h3  font-headline text-headlineColor font-semiBold ">
                  {item.title}
                </h4>

                <div className="w-fill  [&_a]:text-purple [&_a]:font-semiBold   [&_p]:text-navLinks [&_p]:font-regular [&_p]:font-body [&_p]:text-bodyGrey">
                  <PrismicRichText field={item.paragraph} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default WhyUsOverview;
