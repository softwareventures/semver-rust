export interface Version {
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
    readonly pre: ReadonlyArray<string>;
    readonly build: ReadonlyArray<string>;
}