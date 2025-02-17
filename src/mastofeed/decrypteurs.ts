import { Mastofeed, GuillemetsTransform, AudioSnippetTransform } from 'mastofeed';
import env from 'env-var';
import { MASTODON_INSTANCE_URL, LOG_LEVEL } from '../utils/env';

const DECRYPTEURS_ACCESS_TOKEN = env.get('DECRYPTEURS_ACCESS_TOKEN').required().asString();

export const decrypteursFeed = new Mastofeed({
  mastodon: {
    instanceUrl: MASTODON_INSTANCE_URL,
    accessToken: DECRYPTEURS_ACCESS_TOKEN,
  },
  rss: {
    feedUrl: 'https://ohdieux.ligature.ca/rss?programme_id=11099',
    postDef: {
      id: { path: 'guid' },
      title: { path: 'title' },
      description: { path: 'contentSnippet', transforms: [new GuillemetsTransform()] },
      category: { path: 'itunes.duration', transforms: [new AudioSnippetTransform("▶️  Écouter l'épisode")] },
      linkUrl: { path: 'enclosure.url' },
    },
    maxSyncedItems: 8,
  },
  logging: {
    level: LOG_LEVEL,
    prefix: 'Décrypteurs',
  },
});
