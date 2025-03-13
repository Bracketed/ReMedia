import { EventEmitter } from 'node:events';

interface PublishOptions {
	files: Array<Express.Multer.File>;
	exclude?: Array<string>;
}

class Publisher extends EventEmitter {
	private readonly files: Array<Express.Multer.File>;

	constructor(options: PublishOptions = { files: [] }) {
		super();
		this.files = options.files;
	}
}
