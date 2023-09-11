import 'dotenv/config';
import env from 'env-var';
import { Mastofeed, UppercaseTransform, MapTransform } from 'mastofeed';

const MASTODON_ACCESS_TOKEN = env.get('MASTODON_ACCESS_TOKEN').required().asString();

const laPresseFeed = new Mastofeed({
  mastodon: {
    instanceUrl: 'https://staging.mastodon.quebec',
    accessToken: MASTODON_ACCESS_TOKEN,
  },
  rss: {
    feedUrl: 'https://www.lapresse.ca/manchettes/rss',
    postDef: {
      id: { path: 'guid' },
      title: { path: 'title', regex: '(?!.*\\|) *(.+)?' },
      kicker: { path: 'title', regex: '^(.+) \\|', transforms: [new UppercaseTransform()] },
      category: {
        path: 'link',
        regex: '^https:\\/\\/www\\.lapresse\\.ca\\/(\\w+)\\/',
        transforms: [
          new MapTransform({
            actualites: 'Actualités',
            affaires: 'Affaires',
            auto: 'Auto',
            arts: 'Arts',
            cinema: 'Cinéma',
            contexte: 'Contexte',
            debats: 'Débats',
            gourmand: 'Gourmand',
            international: 'International',
            maison: 'Maison',
            societe: 'Société',
            sports: 'Sports',
            voyage: 'Voyage',
          }),
        ],
      },
      description: { path: 'contentSnippet' },
      author: { path: 'dc:creator' },
      imageUrl: { path: 'enclosure.url' },
      linkUrl: { path: 'link' },
    },
  },
});

(async () => await laPresseFeed.run())();
