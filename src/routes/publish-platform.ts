import { Handlers } from '@bracketed/jova.js';
import { ApplyHandlerOptions } from '@bracketed/jova.js/decorators';
import {
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	ApplicationRoute,
	Methods,
	RouteController,
} from '@bracketed/jova.js/types';

@ApplyHandlerOptions<Handlers.Options>({
	enabled: true,
})
export class Route extends RouteController {
	public override registerApplicationRoutes(registry: ApplicationRegistry): ApplicationRoute {
		return registry.registerApplicationRoutes((route) =>
			route //
				.setRouteName('/publish:platform')
				.setMethod(Methods.POST)
				.setRouteMiddlewares(['file-type-verify-platform'])
		);
	}

	public override async run(
		request: ApplicationRequest,
		response: ApplicationResponse
	): Promise<ApplicationResponse | void> {
		this.logger.info('Recieved request for', request.baseUrl);
		return response.status(200).json({ message: 'Hello World!', images: request.files || [] });
	}
}
