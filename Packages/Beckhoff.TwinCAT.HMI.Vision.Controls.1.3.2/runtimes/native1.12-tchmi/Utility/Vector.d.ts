declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                type StraightLine = {
                    start: Vector;
                    direction: Vector;
                };
                /**
                 * Vector that supports arithmetic operations
                 *
                 * The first three elements of the vector are accessible via x, y and z getters/setters.
                 *
                 * Input checks are mostly omitted for performance reasons and because typescript covers most of it.
                 */
                class Vector extends Array<number> {
                    /**
                     * @param items All items (rest parameters) will be the elements of the new vector.
                     */
                    constructor(...items: Array<number>);
                    /**
                     * similar to vector[0]
                     */
                    get x(): number;
                    set x(newX: number);
                    /**
                     * similar to vector[1]
                     */
                    get y(): number;
                    set y(newY: number);
                    /**
                     * similar to vector[2]
                     */
                    get z(): number;
                    set z(newZ: number);
                    /**
                     * @returns whether the vectors are different.
                     * @param vector
                     */
                    differsTo(vector: Vector): boolean;
                    /**
                     * @returns the sum of this vector and the passed vector.
                     * The length of this vector is dominant.
                     * @param vector summand
                     */
                    plus(vector: Vector): Vector;
                    /**
                     * @returns the difference between the passed vector and this vector.
                     * The length of this vector is dominant.
                     * @param vector subtrahend
                     */
                    minus(vector: Vector): Vector;
                    /**
                     * @returns the product of this vector and the passed scalar
                     * @param scalar factor
                     */
                    times(scalar: number): Vector;
                    /**
                     * @returns the vector with floored values.
                     */
                    floor(): Vector;
                    /**
                     * @returns the cross product or vector product of this vector and the passed vector
                     * @param v vector
                     */
                    product2d(vector: Vector): number;
                    product3d(vector: Vector): Vector;
                    /**
                     * @returns L1 norm of this vector.
                     */
                    l1(): number;
                    /**
                     * @returns L2 norm of this vector.
                     */
                    l2(): number;
                    /**
                     * @returns L2 distance between this vector and passed vector.
                     * @param vector
                     */
                    distanceTo(vector: Vector): number;
                    /**
                     * @returns the minimal distance between this vector and passed straight line
                     * @param line
                     */
                    distanceToLine(line: StraightLine): number;
                    /**
                     * @returns this vector with Math.abs() applied to all elements.
                     */
                    abs(): Vector;
                    /**
                     * @returns this vector with Math.round() applied to all elements.
                     */
                    round(decimals?: number): Vector;
                    /**
                     * @returns this vector with Math.round() applied to all elements.
                     */
                    roundTo(decimals: number): Vector;
                    /**
                     * @returns array with the same elements as this vector.
                     */
                    toArray(): Array<number>;
                    /**
                     * @returns deep copy of this vector.
                     */
                    copy(): Vector;
                    /**
                     * Composes the current vector out of a linear combination of two other vectors v1 and v2.
                     * Therefore, v1 and v2 must be linearly independent!
                     * Input checks are omitted for performance reasons.
                     * @param v1 first vector of linear combination
                     * @param v2 second vector of linear combination
                     * @param target vector to be composed
                     */
                    compose2d(v1: Vector, v2: Vector): Vector;
                    /**
                     * @returns this vector rotated by the passed angle.
                     * @param angle angle in radians
                     */
                    rotate2d(angle: number): Vector;
                    /**
                     * @returns the quadrant number [1-4] of this vector.
                     */
                    quadrant2d(): number;
                    /**
                     * @returns the angle of this vector in radians.
                     * (0, 1) is 0
                     * (-1, 0) is 1.57
                     * (0, -1) is 3.14
                     * (1, 0) is 4.71
                     */
                    getAngle(): number;
                    /**
                     * @returns vector with the same elements as the passed array.
                     * @param array array of numbers
                     */
                    static fromArray(array: Array<number>): Vector;
                    /**
                     * @returns vector with only 0 elements of passed length.
                     * @param length length of returned vector
                     */
                    static zeros(length: number): Vector;
                    /**
                     * @returns unit vector in direction of passed angle.
                     * @param angle 0 is (1, 0) | goes clockwise in radians
                     */
                    static fromAngle(angle: number): Vector;
                    /**
                     * @returns unit vector in direction of passed angle.
                     * @param angle 0 is (1, 0) | goes clockwise in degrees
                     */
                    static fromAngleDeg(angle: number): Vector;
                    /**
                     * @returns the intersection point of two vectors and the factor k from the first line.
                     * To find out if the straight lines have an intersection, check if the result is finite.
                     * @param firstLine
                     * @param secondLine
                     */
                    static intersection(firstLine: StraightLine, secondLine: StraightLine): number;
                    /**
                     * @returns the factor to the point on the line that is at right angles to the specified point.
                     * German: "Lotfußpunktverfahren mit Hilfsebene"
                     * @param line
                     * @param point
                     */
                    static perpendicularDrop(line: StraightLine, point: Vector): number;
                    /**
                     * @returns the specified point from the passed line.
                     * @param line
                     * @param k
                     */
                    static pointFromLine(line: StraightLine, k: number): Vector;
                }
            }
        }
    }
}
//# sourceMappingURL=Vector.d.ts.map