import { Mastofeed, UppercaseTransform, MapTransform, GuillemetsTransform } from 'mastofeed';
import { MASTODON_ACCESS_TOKEN } from '../utils/env';

export const laPresseFeed = new Mastofeed({
  mastodon: {
    instanceUrl: 'https://staging.mastodon.quebec',
    accessToken: MASTODON_ACCESS_TOKEN,
  },
  rss: {
    feedUrl: 'https://www.lapresse.ca/manchettes/rss',
    postDef: {
      id: { path: 'guid' },
      kicker: { path: 'title', regex: '^(.+) \\|', transforms: [new UppercaseTransform()] },
      title: { path: 'title', regex: '(?!.*\\|) *(.+)?' },
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
            dialogue: 'Dialogue',
            gourmand: 'Gourmand',
            international: 'International',
            maison: 'Maison',
            societe: 'Société',
            sports: 'Sports',
            voyage: 'Voyage',
          }),
        ],
      },
      description: { path: 'contentSnippet', transforms: [new GuillemetsTransform()] },
      author: { path: 'dc:creator' },
      linkUrl: { path: 'link' },
    },
  },
});
