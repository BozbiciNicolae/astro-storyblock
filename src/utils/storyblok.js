import {
  apiPlugin,
  loadStoryblokBridge,
  storyblokEditable,
  storyblokInit,
} from "@storyblok/js";

const dev = "SbnLzPOG17Qmhc2YhirImwtt";
const storyblokToken = "SbnLzPOG17Qmhc2YhirImwtt";

const { storyblokApi } = storyblokInit({
  accessToken: storyblokToken,
  apiOptions: {
    cache: { type: "memory" },
  },
  use: [apiPlugin],
});

export async function getLinks() {
  const { data } = await storyblokApi.get("cdn/links", {
    version: "draft",
  });

  const links = data ? data.links : null;

  return links;
}

export async function getStory(slug, language) {

  const { data } = await storyblokApi.get(`cdn/stories/${slug}${language ? "?language=" + language : ""}`, {
    version: "draft",
  });

  const story = data ? data.story : null;

  return story;
}
