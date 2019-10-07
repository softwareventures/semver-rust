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

export function incrementPatch({major, minor, patch}: Version): Version {
    return {major, minor, patch: patch + 1, pre: [], build: []};
}

export function incrementMinor({major, minor, patch}: Version): Version {
    return {major, minor: minor + 1, patch: 0, pre: [], build: []};
}