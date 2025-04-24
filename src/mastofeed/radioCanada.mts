import { GuillemetsTransform, Mastofeed } from 'mastofeed';
import env from 'env-var';
import { MASTODON_INSTANCE_URL, LOG_LEVEL } from '../utils/env.mjs';

const RADIOCANADA_ACCESS_TOKEN = env.get('RADIOCANADA_ACCESS_TOKEN').required().asString();

export const radioCanadaFeed = new Mastofeed({
  mastodon: {
    instanceUrl: MASTODON_INSTANCE_URL,
    accessToken: RADIOCANADA_ACCESS_TOKEN,
  },
  rss: {
    feedUrl: 'https://ici.radio-canada.ca/rss/4159',
    postDef: {
      id: { path: 'guid' },
      title: { path: 'title' },
      description: { path: 'content', transforms: [new GuillemetsTransform()] },
      linkUrl: { path: 'link' },
    },
    maxSyncedItems: 8,
  },
  logging: {
    level: LOG_LEVEL,
    prefix: 'Radio-Canada',
  },
});
