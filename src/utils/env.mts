import env from "env-var";
import { LogLevel } from "mastofeed";

export const MASTODON_INSTANCE_URL = env.get("MASTODON_INSTANCE_URL").required().asString();
export const INTERVAL_SECONDS = env.get("INTERVAL_SECONDS").required().asIntPositive();
export const LOG_LEVEL = env.get("LOG_LEVEL").asEnum<LogLevel>(Object.values(LogLevel));
