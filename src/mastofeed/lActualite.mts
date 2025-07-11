import { GuillemetsTransform, Mastofeed, UppercaseTransform } from "mastofeed";
import env from "env-var";
import { MASTODON_INSTANCE_URL, LOG_LEVEL } from "../utils/env.mjs";

const LACTUALITE_ACCESS_TOKEN = env.get("LACTUALITE_ACCESS_TOKEN").required().asString();

export const lActualiteFeed = new Mastofeed({
  mastodon: {
    instanceUrl: MASTODON_INSTANCE_URL,
    accessToken: LACTUALITE_ACCESS_TOKEN,
  },
  rss: {
    feedUrl: "https://lactualite.com/feed/",
    postDef: {
      id: { path: "guid" },
      kicker: { path: "categories.1", transforms: [new UppercaseTransform()] },
      title: { path: "title" },
      category: { path: "categories.0" },
      description: { path: "content", transforms: [new GuillemetsTransform()] },
      author: { path: "dc:creator" },
      linkUrl: { path: "link" },
    },
    maxSyncedItems: 8,
  },
  logging: {
    level: LOG_LEVEL,
    prefix: "L'Actualité",
  },
});
