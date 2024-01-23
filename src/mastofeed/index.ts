import { Mastofeed } from 'mastofeed';
import { laPresseFeed } from './laPresse';
import { leDevoirFeed } from './leDevoir';
import { radioCanadaFeed } from './radioCanada';
import { lActualiteFeed } from './lActualite';

const allFeeds: Mastofeed[] = [laPresseFeed, leDevoirFeed, radioCanadaFeed, lActualiteFeed];

export async function syncAllFeeds(): Promise<void> {
  console.log(`Syncing ${allFeeds.length} feeds...`);
  for (const feed of allFeeds) {
    try {
      await feed.sync();
    } catch (err) {
      console.error(`Error syncing feed '${feed.rssFeedUrl}': ${JSON.stringify(err, Object.getOwnPropertyNames(err))}`);
    }
  }
  console.log(`Done syncing ${allFeeds.length} feeds.`);
}
