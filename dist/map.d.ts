import { Projection } from "./projection/projection";
import { Layer } from "./layer/layer";
import { Graphic } from "./element/graphic";
export declare class Map {
    private _canvas;
    private _ctx;
    private _drag;
    private _zoom;
    private _center;
    private _extent;
    private _projection;
    private _events;
    private _defaultGraphicLayer;
    private _layers;
    get projection(): Projection;
    constructor(id: string);
    setProjection(projection: any): void;
    setView(center?: number[], zoom?: number): void;
    on(event: any, handler: any): void;
    off(event: any, handler: any): void;
    emit(event: any, param: any): void;
    addLayer(layer: Layer): void;
    removeLayer(layer: Layer): void;
    clearLayers(): void;
    addGraphic(graphic: Graphic): void;
    removeGraphic(graphic: Graphic): void;
    clearGraphics(): void;
    updateExtent(): void;
    redraw(): void;
    clear(): void;
    _onClick(event: any): void;
    _onDoubleClick(event: any): void;
    _onMouseDown(event: any): void;
    _onMouseMove(event: any): void;
    _onMouseUp(event: any): void;
    _onWheel(event: any): void;
    destroy(): void;
}
