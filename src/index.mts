import 'dotenv/config';
import 'death';
import { startInterval } from './utils/interval.mjs';
import { INTERVAL_SECONDS } from './utils/env.mjs';
import { syncAllFeeds } from './mastofeed/index.mjs';

console.log(`Publishing feeds every ${INTERVAL_SECONDS} seconds.`);
startInterval(async () => await syncAllFeeds(), INTERVAL_SECONDS * 1000);
