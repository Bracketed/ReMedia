import { APIs } from '../apis/apis.js';

export class BaseRunner {
	public apis: APIs = new APIs();

	constructor() {
		this.run = this.run.bind(this);
	}

	public async run(): Promise<any | any> {}
}
