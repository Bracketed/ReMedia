import FB from 'fb';

export class FacebookApi {
	private readonly FacebookSDK: FBSDK = FB;

	constructor(params: FBInitParams) {
		this.FacebookSDK.init(params);
		this.FacebookSDK.login((fb) => {
			fb.status === 'connected';
		}, {});
	}
}
