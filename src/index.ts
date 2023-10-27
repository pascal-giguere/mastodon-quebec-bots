import 'dotenv/config';
import 'death';
import { startInterval } from './utils/interval';
import { INTERVAL_SECONDS } from './utils/env';
import { syncAllFeeds } from './mastofeed';

console.log(`Publishing feeds every ${INTERVAL_SECONDS} seconds.`);
startInterval(async () => await syncAllFeeds(), INTERVAL_SECONDS * 1000);
