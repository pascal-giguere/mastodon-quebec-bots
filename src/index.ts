import 'dotenv/config';
import 'death';
import { publishAllFeeds } from './mastofeed';
import { INTERVAL_SECONDS } from './utils/env';
import { startInterval } from './utils/interval';

console.log(`Fetching feeds every ${INTERVAL_SECONDS} seconds.`);
startInterval(async () => await publishAllFeeds(), INTERVAL_SECONDS * 1000);
