import { TwitterApi } from 'twitter-api-v2';

export class APIs {
	private readonly environment: NodeJS.ProcessEnv = process.env;

	public readonly twitter: TwitterApi = new TwitterApi({
		// @ts-ignore
		appKey: this.environment.TWITTER_API_KEY,
		appSecret: this.environment.TWITTER_API_SECRET,
		accessSecret: this.environment.TWITTER_ACCESS_SECRET,
		accessToken: this.environment.TWITTER_ACCESS_TOKEN,
	});

	public readonly tiktok = undefined;

	public readonly linkedin = undefined;

	public readonly facebook = undefined;
}
