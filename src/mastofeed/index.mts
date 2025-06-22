import { Mastofeed } from "mastofeed";
import { laPresseFeed } from "./laPresse.mjs";
import { leDevoirFeed } from "./leDevoir.mjs";
import { radioCanadaFeed } from "./radioCanada.mjs";
import { lActualiteFeed } from "./lActualite.mjs";
import { pivotFeed } from "./pivot.mjs";
import { decrypteursFeed } from "./decrypteurs.mjs";
// import { journalDeMontrealFeed } from './journalDeMontreal.mjs';

const allFeeds: Mastofeed[] = [
  decrypteursFeed,
  lActualiteFeed,
  // laPresseFeed,
  leDevoirFeed,
  pivotFeed,
  radioCanadaFeed,
  // journalDeMontrealFeed,
];

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
