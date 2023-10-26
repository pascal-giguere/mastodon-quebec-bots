import env from 'env-var';

export const MASTODON_INSTANCE_URL = env.get('MASTODON_INSTANCE_URL').required().asString();
export const INTERVAL_SECONDS = env.get('INTERVAL_SECONDS').required().asIntPositive();
