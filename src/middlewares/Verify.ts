import {
	ApplicationNextFunction,
	ApplicationRequest,
	ApplicationResponse,
	MiddlewareController,
	MiddlewareOptions,
} from '@bracketed/jova.js/types';

import { Handlers } from '@bracketed/jova.js';
import { ApplyHandlerOptions } from '@bracketed/jova.js/decorators';
import { fileTypeFromBuffer } from 'file-type';
import extensions from '../extensions.json' with { type: 'json' };

@ApplyHandlerOptions<Handlers.Options>({
	type: Handlers.Type.MIDDLEWARE,
	enabled: true,
})
export class Middleware extends MiddlewareController {
	public override setApplicationMiddlewareOptions(): MiddlewareOptions {
		return {
			middlewareName: 'file-type-verify',
			runsOnAllRoutes: true,
		};
	}

	private async process(file: Express.Multer.File): Promise<boolean> {
		try {
			const fileType = await fileTypeFromBuffer(file.buffer);
			if (!fileType || !extensions.includes(fileType.mime)) return false;

			return true;
		} catch (error) {
			return false;
		}
	}

	public override async run(
		request: ApplicationRequest,
		response: ApplicationResponse,
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> {
		this.logger.info(request.files);
		if (!request.files) return next();
		if (request.files.length === 0) return next();
		// Something about this line below makes me feel uneasy
		if (!Array.isArray(request.files)) return next();
		if (request.files.length > 4) return response.status(500).json({ err: 'Maximum image media reached.' });
		// Add rule for if theres more than 1 video refuse post

		const Files: Express.Multer.File[] = request.files as Express.Multer.File[];
		let ErrorAtIndex: number | undefined;

		for await (const [index, File] of Files.entries()) {
			const Result = await this.process(File);

			if (!Result) {
				ErrorAtIndex = index;
				break;
			}
		}

		if (ErrorAtIndex !== undefined)
			return response.status(500).json({
				err: `Unable to process content: Media at index ${ErrorAtIndex} is either not an image or a video, or is corrupt.`,
			});

		return next();
	}
}
