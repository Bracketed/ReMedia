import { TwitterApi } from 'twitter-api-v2';

export class BaseRunner {
	public apis = {
		twitter = new TwitterApi(),
	};

	constructor() {
		this.run = this.run.bind(this);
	}

	public async run(): Promise<any | any> {}
}
