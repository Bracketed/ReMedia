import { BaseRunner } from '../base-runner.js';

export class Runner extends BaseRunner {
	public override async run(): Promise<void> {
		process.env.TWITTER_API_KEY;
	}
}
