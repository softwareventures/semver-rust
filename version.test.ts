import test from "ava";
import {format, withoutMetadata} from "./version";

test("format", t => {
    t.is(format({major: 1, minor: 2, patch: 3, pre: [], build: []}), "1.2.3");
    t.is(format({major: 2, minor: 3, patch: 4, pre: ["2", "development"], build: []}), "2.3.4-2.development");
    t.is(format({major: 0, minor: 9, patch: 2, pre: [], build: ["softwareventures"]}), "0.9.2+softwareventures");
    t.is(format({major: 5, minor: 2, patch: 242, pre: ["2342", "9852", "beta"], build: ["complico", "8", "9", "5"]}),
        "5.2.242-2342.9852.beta+complico.8.9.5");
});

test("withoutMetadata", t => {
    t.deepEqual(withoutMetadata({major: 1, minor: 2, patch: 3, pre: [], build: []}),
        {major: 1, minor: 2, patch: 3, pre: [], build: []});
    t.deepEqual(withoutMetadata({major: 2, minor: 3, patch: 4, pre: ["2", "development"], build: []}),
        {major: 2, minor: 3, patch: 4, pre: [], build: []});
    t.deepEqual(withoutMetadata({major: 0, minor: 9, patch: 2, pre: [], build: ["softwareventures"]}),
        {major: 0, minor: 9, patch: 2, pre: [], build: []});
});