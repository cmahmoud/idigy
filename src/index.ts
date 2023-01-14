import { range, uuid, normal } from "./helpers";
import { Idigy } from "./types";

export default function idigy(): Idigy {
    return {
        pattern: "xxxx-xxxx-xxxx-xxxx",
        range,
        uuid,
        normal,
    };
}
