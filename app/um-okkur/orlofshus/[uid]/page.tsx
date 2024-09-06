// import { Metadata } from "next";
// import { createClient } from "../../../../prismicio";
// import { OneOrlofshusDocument } from "@/prismicio-types";
// import { SliceZone } from "@prismicio/react";
// import { components } from "../../../../slices";
// import { FadeIn } from "@/app/components/FadeIn/fadeIn";
// import Image from "next/image";
// import Link from "next/link";
// import Chevron from "../../../../public/icons/chevronUp.svg";
// import AllHousesOverview from "@/app/components/AllHousesOverview/allHousesOverview";
// type Params = { uid: string };
// export async function generateMetadata({
//   params,
// }: {
//   params: Params;
// }): Promise<Metadata> {
//   const client = createClient();
//   const page = await client.getByUID("one_orlofshus", params.uid);

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }

// export default async function OneOrlofshus({ params }: { params: Params }) {
//   const client = createClient();

//   const page = await client.getByUID<OneOrlofshusDocument>(
//     "one_orlofshus",
//     params.uid
//   );
//   const section = page.data;

//   return (
//     <section className="flex flex-col justify-center bg-backgroundGrey">
//       <div className="pt-fluid-40 smmd:pt-fluid-64  px-container-88   flex flex-col gap-fluid-56  w-fill self-center  max-w-[2000px] ">
//         <FadeIn className="flex gap-y-6  font-body text-sm  w-fit flex-wrap">
//           <Link
//             className="text-bodyGrey  hover:text-buttonBlue transition-all duration-300"
//             href={"/"}
//           >
//             Heim
//           </Link>
//           <Image
//             alt="ör til hægri"
//             src={Chevron}
//             className="h-fluid-16 rotate-90 self-center"
//           />
//           <Link
//             className="text-sm text-bodyGrey hover:text-buttonBlue transition-all duration-300 whitespace-nowrap"
//             href={"/um-okkur"}
//           >
//             Um okkur
//           </Link>
//           <Image
//             alt="ör til hægri"
//             src={Chevron}
//             className="h-fluid-16 rotate-90 self-center"
//           />
//           <Link
//             className="text-sm text-bodyGrey hover:text-buttonBlue transition-all duration-300"
//             href={"/um-okkur/orlofshus"}
//           >
//             Orlofshús
//           </Link>
//           <Image
//             alt="ör til hægri"
//             src={Chevron}
//             className="h-fluid-16 rotate-90 self-center"
//           />

//           <p className="text-sm text-headlineColor font-semiBold">
//             {section.title}
//           </p>
//         </FadeIn>
//       </div>
//       <SliceZone slices={page.data.slices} components={components} />
//       <AllHousesOverview />
//     </section>
//   );
// }
