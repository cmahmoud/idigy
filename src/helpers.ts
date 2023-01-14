import { Idigy } from "./types";

/**
 * @example
 * ```js
 * range(1,10) // 6
 * range(10) // 4
 * range(100,1000) // 298
 * range(1000) // 992
 * ```
 */
function range(min: number, max?: number): number {
    if (max && max < min) {
        throw new Error(
            "(max) parameter is must be bigger than (min) parameter"
        );
    }
    if (!max && min) {
        return Math.round(Math.random() * (Number(min) - 1));
    }
    return Math.round(Math.random() * (Number(max) - Number(min)));
}

/**
 * @example
 * ```js
 * uuid() // 9621-4b5c-419e-2758
 * uuid() // 9b96-999a-3267-ed43
 * uuid() // 0c66-275b-e9bd-e6ce
 * ```
 */
function uuid(this: Idigy): string {
    const id = this.pattern.replace(/[x]/g, function () {
        return Math.round(Math.random() * 16)
            .toString(16)
            .substring(0, 1);
    });
    return id;
}

/**
 * @example
 * ```js
 * normal() // 2c7d296c9c
 * normal(15) // 6bb7248fac625b3
 * normal(20) // d7ec675a105114167e865
 * ```
 */
function normal(length = 10): string {
    const generated = Math.floor(
        Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)
    );
    const charArr = generated.toString().split("");
    const generatedId = charArr.map(() =>
        Math.round(Math.random() * 16).toString(16)
    );
    return generatedId.join("").substring(0, length);
}
const idigy: Idigy = {
    pattern: "xxxx-xxxx-xxxx-xxxx",
    range,
    uuid,
    normal,
};
export default idigy;
