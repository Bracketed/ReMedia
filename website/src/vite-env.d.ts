/// <reference types="node" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.scss' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.sass' {
	const classes: { readonly [key: string]: string };
	export default classes;
}
