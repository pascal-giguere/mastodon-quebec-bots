import { Mastofeed } from 'mastofeed';
import { laPresseFeed } from './laPresse';

const allFeeds: Mastofeed[] = [laPresseFeed];

export async function publishAllFeeds(): Promise<void> {
  for (const feed of allFeeds) {
    await feed.publish();
  }
  console.log(`Successfully published ${allFeeds.length} feeds.`);
}
