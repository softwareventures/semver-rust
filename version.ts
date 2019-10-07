export interface Version {
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
    readonly pre: ReadonlyArray<string>;
    readonly build: ReadonlyArray<string>;
}

export function format({major, minor, patch, pre, build}: Version): string {
    return `${major}.${minor}.${patch}${
        pre.length === 0
            ? ""
            : "-" + pre.join(".")
    }${
        build.length === 0
            ? ""
            : "+" + build.join(".")
    }`;
}

export function withoutMetadata({major, minor, patch}: Version): Version {
    return {major, minor, patch, pre: [], build: []};
}