import { createClient } from "../../../prismicio";

import HeaderClient from "./HeaderClient";

export default async function Header() {
  const client = createClient();

  const data = await client.getSingle("header");
  const content = data.data;

  return (
    <>
      <HeaderClient content={content} />
    </>
  );
}
