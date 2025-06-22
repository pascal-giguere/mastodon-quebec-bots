import { GuillemetsTransform, Mastofeed } from "mastofeed";
import env from "env-var";
import { MASTODON_INSTANCE_URL, LOG_LEVEL } from "../utils/env.mjs";

const LEDEVOIR_ACCESS_TOKEN = env.get("LEDEVOIR_ACCESS_TOKEN").required().asString();

export const leDevoirFeed = new Mastofeed({
  mastodon: {
    instanceUrl: MASTODON_INSTANCE_URL,
    accessToken: LEDEVOIR_ACCESS_TOKEN,
  },
  rss: {
    feedUrl: "https://www.ledevoir.com/rss/manchettes.xml",
    postDef: {
      id: { path: "guid" },
      title: { path: "title" },
      category: { path: "categories.0" },
      description: { path: "content", transforms: [new GuillemetsTransform()] },
      author: { path: "author", regex: "\\(([^\\)]+)\\)" },
      linkUrl: { path: "link" },
    },
    maxSyncedItems: 8,
  },
  logging: {
    level: LOG_LEVEL,
    prefix: "Le Devoir",
  },
});
