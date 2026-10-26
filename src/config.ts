import type {
	AnalyticsConfig,
	CommentConfig,
	DeployConfig,
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Leo",
	subtitle: "Leo 的个人网站",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	// Leave it empty `[]` if want disable multi-languages. It can be sorted by array order
	supportedLangs: ["zh_CN"],
	theme: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		mode: "light",
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "Placeholder banner", // Credit text to be displayed
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.svg',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
	ogImage: {
		useDefault: true,
		defaultSrc: "/media/images/banner.jpg",
	},
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "项目",
			url: "/projects/",
		},
		{
			name: "知识库",
			url: "/docs/",
		},
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/faicma/leo",
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Leo",
	bio: "学生 · AI 探索者 · 这是我的个人网站（placeholder 简介，等你来补充）",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/faicma",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

// Check https://giscus.app/ to get repoId and categoryId
// 配置好 giscus 后，把下面注释的 giscus 配置填回去即可开启评论
export const commentConfig: CommentConfig = {
	// giscus: {
	// 	repo: "faicma/leo",
	// 	repoId: "",          // 在 https://giscus.app/ 生成
	// 	category: "Announcements",
	// 	categoryId: "",      // 在 https://giscus.app/ 生成
	// 	mapping: "pathname",
	// 	strict: "0",
	// 	reactionsEnabled: "1",
	// 	emitMetadata: "1",
	// 	inputPosition: "top",
	// 	theme: "reactive",
	// 	lang: "zh_CN",
	// 	loading: "lazy",
	// },
};

// Site analytics config, only support GA4 for now
export const analyticsConfig: AnalyticsConfig = {
	enabled: false,
	// Example if using Google Analytics, don't forget to make `enabled` true
	// google: {
	//	 id: "G-xxx",
	// },
};

// Deploy configuration (Netlify, GitHub Pages, Coludflared, etc)
export const deployConfig: DeployConfig = {
	siteUrl: "https://faicma.github.io",
	baseUrl: "/leo",
};
