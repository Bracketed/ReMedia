export default {
	IDENTIFY: 'identify',
	EMAIL: 'email',
	BOT: 'bot',
	VOICE: 'voice',
	CONNECTIONS: 'connections',

	WEBHOOK: { INCOMING: 'webhook.incoming' },
	RELATIONSHIPS: { READ: 'relationships.read', WRITE: 'relationships.write' },

	APPLICATIONS: {
		BUILDS: {
			READ: 'applications.builds.read',
			UPLOAD: 'applications.builds.upload',
		},
		STORE: {
			UPDATE: 'applications.store.update',
		},
		ENTITLEMENTS: 'applications.entitlements',
		COMMANDS: new Proxy(
			{
				PERMISSIONS: {
					UPDATE: 'applications.commands.permissions.update',
				},
			} as const,
			{
				get(target, prop: string | symbol) {
					if (prop === 'toString') return () => 'applications.commands';
					return target[prop as keyof typeof target];
				},
			}
		),
	},

	RPC: new Proxy(
		{
			VOICE: { WRITE: 'rpc.voice.write', READ: 'rpc.voice.read' },
			SCREENSHARE: { READ: 'rpc.screenshare.read', WRITE: 'rpc.screenshare.write' },
			NOTIFICATIONS: { READ: 'rpc.notifications.read' },
			VIDEO: { READ: 'rpc.video.read', WRITE: 'rpc.video.write' },
			ACTIVITIES: { WRITE: 'rpc.activities.write' },
		} as const,
		{
			get(target, prop: string | symbol) {
				if (prop === 'toString') return () => 'rpc';
				return target[prop as keyof typeof target];
			},
		}
	),
	GUILDS: new Proxy(
		{
			CHANNELS: { READ: 'guilds.channels.read' },
			MEMBERS: { READ: 'guilds.members.read' },
			JOIN: 'guilds.join',
		} as const,
		{
			get(target, prop: string | symbol) {
				if (prop === 'toString') return () => 'guilds';
				return target[prop as keyof typeof target];
			},
		}
	),
};
