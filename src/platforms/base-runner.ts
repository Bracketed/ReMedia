export class BaseRunner {
	constructor() {
		this.run = this.run.bind(this);
	}

	public async run(): Promise<any | any> {}
}
