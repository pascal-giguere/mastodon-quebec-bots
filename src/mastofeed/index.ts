import { Mastofeed } from 'mastofeed';
import { laPresseFeed } from './laPresse';
import { leDevoirFeed } from './leDevoir';
import { radioCanadaFeed } from './radioCanada';

const allFeeds: Mastofeed[] = [laPresseFeed, leDevoirFeed, radioCanadaFeed];

export async function syncAllFeeds(): Promise<void> {
  console.log(`Syncing ${allFeeds.length} feeds...`);
  for (const feed of allFeeds) {
    try {
      await feed.sync();
    } catch (err) {
      console.error(`Error syncing feed: ${JSON.stringify(err)}`);
    }
  }
  console.log(`Done syncing ${allFeeds.length} feeds.`);
}
