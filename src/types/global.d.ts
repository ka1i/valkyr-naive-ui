export { }
declare global {
    const __APP_INFO__: {
        pkg: {
            name: string;
            author: author;
            license: string
            version: string;
            repository: repository;
            description: string
            dependencies: Recordable<string>;
            devDependencies: Recordable<string>;
        };
        gitTags: string;
        lastBuildTime: string;
    };

    // vue
    declare type Recordable<T = any> = Record<string, T>;
    declare type ReadonlyRecordable<T = any> = {
        readonly [key: string]: T;
    };

    declare interface author {
        name: string
        url: string
    }
    declare interface repository {
        type: string
        url: string
    }

    interface ImportMetaEnv extends ViteEnv {
        __: unknown;
    }

    declare interface ViteEnv {
        VITE_PORT: number;
        VITE_USE_MOCK: boolean;
        VITE_USE_PWA: boolean;
        VITE_PUBLIC_PATH: string;
        VITE_PROXY: [string, string][];
        VITE_GLOB_APP_TITLE: string;
        VITE_GLOB_APP_SHORT_NAME: string;
        VITE_USE_CDN: boolean;
        VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
        VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
        VITE_LEGACY: boolean;
        VITE_USE_IMAGEMIN: boolean;
        VITE_GENERATE_UI: string;
    }

    interface Window {
        $dialog: import('naive-ui').DialogApi;
        $loading: import('naive-ui').LoadingBarApi;
        $message: import('naive-ui').MessageApi;
        $loadingBar: import('naive-ui').LoadingBarApi;
        $notification: import('naive-ui').NotificationApi;
    }
}
