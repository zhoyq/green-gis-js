import { CoordinateType, Geometry } from "./geometry";
import { Bound } from "../util/bound";
import { Projection } from "../projection/projection";
import { Symbol } from "../symbol/symbol";
export declare class Point extends Geometry {
    static TOLERANCE: number;
    private _symbol;
    private _lng;
    private _lat;
    private _x;
    private _y;
    private _screenX;
    private _screenY;
    constructor(lng: number, lat: number);
    project(projection: Projection): void;
    draw(ctx: CanvasRenderingContext2D, projection?: Projection, extent?: Bound, symbol?: Symbol): Promise<void>;
    contain(screenX: number, screenY: number): boolean;
    getCenter(type?: CoordinateType, projection?: Projection): number[];
}
