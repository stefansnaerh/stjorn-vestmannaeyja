import { NewsDocument } from "@/prismicio-types";
import { createClient } from "../../../prismicio";
import NewsClientNoScroll from "./NewsClientNoScroll";
import NewsClient from "./NewsClient";

export default async function News({ type }: { type: "scroll" | "noScroll" }) {
  const client = createClient();

  let news = await client.getAllByTag<NewsDocument>("Frétt");

  news = news.sort((a, b) => {
    const dateA = new Date(`${a.data.date}`);
    const dateB = new Date(`${b.data.date}`);
    return dateB.getTime() - dateA.getTime(); // Newest first
  });

  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("is-IS", options); // 'is-IS' for Icelandic locale
  }
  if (type === "scroll") {
    return (
      <section>
        <NewsClient news={news} />
      </section>
    );
  } else if (type === "noScroll") {
    return (
      <section>
        <NewsClientNoScroll news={news} />
      </section>
    );
  } else return <></>;
}
