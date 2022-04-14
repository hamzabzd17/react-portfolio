import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "xs9p4492",
  dataset: "production",
  apiVersion: "2022-04-13",
  useCdn: true,
  token:
    "skwQ5kgCEfqAMmWOwimOugPBcrG6gCVDthg2fNfUCXJiCIMSPgjr5U9wCBygQo2M4eKTOuOVafWSyxt1bv9drKbL3HpoCpffZBCsxqap2X9p9ilCjwXP1DYSZj8kwdjTUicTcY3oaqx1a5mF4FL45lRAQ2aCPxtJ2HERRt2aKs8kmdNCbvuy",
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
