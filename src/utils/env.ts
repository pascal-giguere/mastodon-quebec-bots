import env from 'env-var';

export const MASTODON_ACCESS_TOKEN = env.get('MASTODON_ACCESS_TOKEN').required().asString();
export const INTERVAL_SECONDS = env.get('INTERVAL_SECONDS').required().asIntPositive();
