import 'dotenv/config';
import 'death';
import { runFeeds } from './mastofeed';
import { INTERVAL_SECONDS } from './utils/env';
import { startInterval } from './utils/interval';

console.log(`Fetching feeds every ${INTERVAL_SECONDS} seconds.`);
startInterval(async () => await runFeeds(), INTERVAL_SECONDS * 1000);
