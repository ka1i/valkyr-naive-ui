export function isDevFn(mode: string): boolean {
    return mode === 'development';
}

export function isProdFn(mode: string): boolean {
    return mode === 'production';
}

// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
    const ret: any = {};

    for (const envName of Object.keys(envConf)) {
        let realName = envConf[envName].replace(/\\n/g, '\n');
        realName = realName === 'true' ? true : realName === 'false' ? false : realName;

        if (envName === 'VITE_PORT') {
            realName = Number(realName);
        }
        if (envName === 'VITE_PROXY') {
            try {
                realName = JSON.parse(realName);
            } catch (error) {
                realName = '';
            }
        }
        ret[envName] = realName;
        if (typeof realName === 'string') {
            process.env[envName] = realName;
        } else if (typeof realName === 'object') {
            process.env[envName] = JSON.stringify(realName);
        }
    }
    return ret;
}
