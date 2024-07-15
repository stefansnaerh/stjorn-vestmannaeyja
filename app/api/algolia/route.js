import algoliasearch from "algoliasearch";
import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";

// Function that takes Prismic slices and transforms them into searchable text for Algolia.
const transformAboutUsSlices = (slices) => {
  const textStrings = slices.map((slice) => {
    if (slice.slice_type === "employees") {
      return slice.items.map((item) => {
        return item.name + " " + item.position;
      });
    }
    if (slice.slice_type === "board") {
      return slice.items.map((item) => {
        return item.name + " " + item.status;
      });
    }
    if (slice.slice_type === "image") {
      return asText(slice.primary.caption);
    }
    if (slice.slice_type === "board") {
      return asText(slice.primary.quote) + " " + slice.primary.source;
    }
  });

  return textStrings.join(" "); // Join items into a single string
};

const transFormUmsoknirSlices = (slices) => {
  const textStrings = slices.map((slice) => {
    return (
      slice.title +
      " " +
      slice.items.map((item) => {
        return item.text;
      })
    );
  });
  return textStrings.join(" ");
};

export async function POST(request) {
  // Check if Algolia credentials exist, return error if not
  if (
    !process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID ||
    !process.env.ALGOLIA_ADMIN_KEY
  ) {
    return new Response("Algolia credentials are not set", {
      status: 500,
    });
  }

  try {
    // Instantiate Prismic and Algolia clients
    const prismicClient = createClient();
    const algoliaClient = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
      process.env.ALGOLIA_ADMIN_KEY
    );

    // Initialize an Algolia index named 'stf_website'
    const index = algoliaClient.initIndex("stf_website");

    // Get all news from Prismic
    const news = await prismicClient.getAllByTag("Frétt");
    // Map articles to Algolia records
    const newsRecords = news.map((post) => ({
      objectID: post.id, // Unique identifier in algolia
      url: post.url, // Unique identifier in algolia
      title: post.data.title, // Post title
      slug: post.uid, // Post URL slug
      // image: post.data.image, // Post featured image
      paragraph: asText(post.data.paragraph), // Post content transformed to search text
    }));

    const education = await prismicClient.getAllByType(
      "menntun_og_fraedsla_textasida"
    );
    const educationRecords = education.map((page) => ({
      objectID: page.id,
      url: page.url,
      title: page.data.title,
      slug: page.uid,
      paragraph: asText(page.data.paragraph),
    }));

    const stjornendaFraedsla =
      await prismicClient.getSingle("stjornendafraedsla");
    const stjornendaFraedslaRecords = {
      objectID: stjornendaFraedsla.id,
      url: stjornendaFraedsla.url,
      title: stjornendaFraedsla.data.title,
      subTitle: stjornendaFraedsla.data.title,
      paragraph: stjornendaFraedsla.data.paragraph,
      text: transformAboutUsSlices(stjornendaFraedsla.data.slices),
    };

    const medicalFund = await prismicClient.getAllByTag("Sjúkrasjóður");
    const medicalFundRecords = medicalFund.map((page) => ({
      objectID: page.id,
      url: page.url,
      title: page.data.title,
      subTitle: page.data.sub_title,
      slug: page.uid,
      paragraph: asText(page.data.paragraph),
    }));

    const kaupOgKjorTextasida = await prismicClient.getAllByType(
      "kaup_og_kjor_textasida"
    );
    const kaupOgKjorTextasidaRecords = kaupOgKjorTextasida.map((page) => ({
      objectID: page.id,
      url: page.url,
      title: page.data.title,
      subTitle: page.data.sub_title,
      slug: page.uid,
      paragraph: asText(page.data.paragraph),
    }));

    const umOkkurTextasida = await prismicClient.getAllByType("textasida");
    const umOkkurTextasidaRecords = umOkkurTextasida.map((page) => ({
      objectID: page.id,
      url: page.url,
      title: page.data.title,
      subTitle: page.data.sub_title,
      slug: page.uid,
      paragraph: asText(page.data.paragraph),
    }));
    const umOkkur = await prismicClient.getAllByType("about_us");
    const umOkkurRecords = umOkkur.map((page) => ({
      objectID: page.id,
      url: page.url,
      title: page.data.title,
      slug: page.uid,
      paragraph: page.data.paragraph,
      text: transformAboutUsSlices(page.data.slices),
    }));
    const idgjold = await prismicClient.getAllByType("idgjold");
    const idgjoldRecords = idgjold.map((page) => ({
      objectID: page.id,
      url: page.url,
      title: page.data.title,
      slug: page.uid,
      paragraph: page.data.paragraph,
    }));
    const umsoknirOgForm = await prismicClient.getAllByType("umsoknir_og_form");
    const umsoknirOgFormRecords = umsoknirOgForm.map((page) => ({
      objectID: page.id,
      url: page.url,
      title: page.data.title,
      slug: page.uid,
      paragraph: page.data.paragraph,
      text: transFormUmsoknirSlices(page.data.slices),
    }));

    const skilagrein = await prismicClient.getAllByType("skilagrein");
    const skilagreinRecords = skilagrein.map((page) => ({
      objectID: page.id,
      url: page.url,
      title: page.data.title,
      slug: page.uid,
    }));

    // Index records to Algolia
    await index.saveObjects(newsRecords);
    await index.saveObjects(educationRecords);
    await index.saveObject(stjornendaFraedslaRecords);
    await index.saveObjects(medicalFundRecords);
    await index.saveObjects(kaupOgKjorTextasidaRecords);
    await index.saveObjects(umOkkurTextasidaRecords);
    await index.saveObjects(umOkkurRecords);
    await index.saveObjects(idgjoldRecords);
    await index.saveObjects(umsoknirOgFormRecords);
    await index.saveObjects(skilagreinRecords);

    // Return success response if the process completes without any issue
    return new Response(
      "Content successfully synchronized with Algolia search",
      {
        status: 200,
      }
    );
  } catch (error) {
    // Log the error and return error response if any error occurs
    console.error(error);
    return new Response("An error occurred while synchronizing content", {
      status: 500,
    });
  }
}
