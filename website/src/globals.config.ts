const Scopes: Array<string> = ['identify', 'guilds', 'openid', 'guilds.members.read', 'guilds.channels.read'];

const GetSiteHostname = () => {
	return;
};

const Configuration = {
	'discord-auth':
		'https://discord.com/oauth2/authorize?client_id=1260327660203151541&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsignin&scope=identify+guilds+openid+guilds.members.read+guilds.channels.read',
};

export default Configuration;
