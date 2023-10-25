import { Mastofeed } from 'mastofeed';
import { laPresseFeed } from './laPresse';

const feeds: Mastofeed[] = [laPresseFeed];

export async function runFeeds(): Promise<void> {
  for (const feed of feeds) {
    await feed.run();
  }
}
