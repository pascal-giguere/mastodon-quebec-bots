import { Mastofeed } from 'mastofeed';
import { laPresseFeed } from './laPresse';
import { leDevoirFeed } from './leDevoir';

const allFeeds: Mastofeed[] = [laPresseFeed, leDevoirFeed];

export async function publishAllFeeds(): Promise<void> {
  for (const feed of allFeeds) {
    await feed.publish();
  }
  console.log(`Successfully published ${allFeeds.length} feeds.`);
}
