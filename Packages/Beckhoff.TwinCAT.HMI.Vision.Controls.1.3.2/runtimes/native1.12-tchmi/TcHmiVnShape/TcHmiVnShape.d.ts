declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                abstract class TcHmiVnShape extends TcHmiVnControl {
                    /**
                     * @description Constructor of the control
                     * @param element Element from HTML (internal, do not use)
                     * @param pcElement precompiled Element (internal, do not use)
                     * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                     */
                    constructor(element: JQuery, pcElement: JQuery, attrs: ControlAttributeList);
                    /**
                     * Properties
                     */
                    protected __$props: TcHmiVnShape.Properties;
                    /**
                     * SubControls
                     */
                    protected __$controls: TcHmiVnShape.SubControls;
                    /**
                     * Will be called after control is attached to DOM.
                     */
                    __attach(): void;
                    /************************************************************
                     * DOM elements
                     */
                    /**
                     * DOM element of rotating mouse cursor
                     */
                    protected __rotatingCursor: JQuery<SVGImageElement> | null;
                    protected __outsideHandleElement: JQuery<SVGImageElement> | null;
                    /************************************************************
                     * Shape data
                     */
                    /**
                     * Data of handles
                     */
                    protected __outsideHandle: {
                        position: Vector;
                        cursor: string;
                        angle: number;
                    };
                    /**
                     * Offset that should be applied to represent the shape's data to the outside.
                     */
                    protected __offset: Vector;
                    /**
                     * Borders that the rectangle must not leave.
                     * Order: Bottom -> clockwise
                     */
                    protected __boundaryLines: StraightLine[];
                    /**
                     * Area that the rectangle must not leave.
                     */
                    protected __shapeBoundary: TcHmiVnRectangle.Rectangle;
                    protected __rotationHandleMouseOver: boolean;
                    /************************************************************
                     * Drag information
                     */
                    protected __shapeDrag: TcHmiVnShape.ShapeDrag;
                    protected __rotationDrag: TcHmiVnShape.RotationDrag;
                    protected __angleRestrictions: number[][];
                    protected __rotationHandleDisplayPosition: Vector;
                    protected __lastMouseAngle: number;
                    /**
                     * Registers DOM elements for handles.
                     */
                    protected __registerOutsideHandleElement(element: JQuery<SVGImageElement>): void;
                    /**
                     * Registers listeners for events on the handles.
                     */
                    protected __registerHandleEventListeners(): void;
                    /**
                     * Returns the position relative to shape data.
                     * @param event
                     */
                    protected __positionFromEvent(event: JQuery.Event | MouseEvent | TouchEvent | Touch): Vector;
                    /**
                     * Handler for shape and center mouse down
                     * @param event
                     * @param outsideHandle is the outsideHandle the trigger?
                     */
                    protected abstract __shapeDragHandler(event: JQuery.Event, outsideHandle: boolean): void;
                    /**
                     * Save whether touch is currently active and when the last touch event took place.
                     */
                    protected __isTouching: boolean;
                    protected __lastTouch: number;
                    /**
                     * Should be triggered when a touch event is triggered.
                     */
                    protected __touchActive(): void;
                    /**
                     * Should be triggered when a touch event ends.
                     */
                    protected __touchEnd(): void;
                    /**
                     * Returns true if touch is not active and the last touch event was more than 400ms ago, otherwise false.
                     * This is needed to avoid multiple event triggers. When touch starts, mousestart could also be called.
                     */
                    protected __touchCheck(): boolean;
                    protected __updateOutsideHandleUI(isShapeActive: boolean): void;
                    /**
                     * Updates the rotating cursors css
                     */
                    protected __updateRotatingCursor(): void;
                    /**
                     * Deactivates the rotating cursor.
                     */
                    protected abstract __stopRotatingCursor(): any;
                    /**
                     *
                     * @param refPosition
                     */
                    protected __setOutsideHandle(pRefPosition: Vector): void;
                    /**
                     *
                     */
                    protected __resetOutsideHandle(): void;
                    /**
                     *
                     * @param handleData
                     * @param referencePoint
                     */
                    protected __updateShapeDragBorders(handleData: Vector[], referencePoint: Vector, f?: boolean): void;
                    /**
                     * Returns a list of angle ranges that would excite the specified border/scope of the shape.
                     * Returns null, if no angle is valid.
                     * @param handleData List of handle positions.
                     * @param center Center of the shape.
                     * @param currentAngle Current angle of the shape.
                     */
                    protected __updateAngleRestrictions(handleData: Vector[], center: Vector, currentAngle: number): void;
                    /**
                     * Updates the boundary rectangle that must not be left by the shape.
                     * Note: Is called very often on init. On setWidth, setWidthUnit, setTop, setTopUnit, setWidthMode, same on y axis.., attach, ..., processShapeData, ...
                     */
                    protected __updateBoundary(): void;
                    protected abstract __updateShapeIsInBoundary(): void;
                    /**
                     * Returns if the point is in the __shapeBoundary.
                     * @param point
                     */
                    protected __isPointInBoundary(point: Vector): boolean;
                    /**
                     * Returns if the point is in the control area.
                     * @param point
                     */
                    protected __isPointInControlArea(point: Vector): boolean;
                    /**
                     * Raises the shapeChanged and the valuesChaned event.
                     */
                    protected __shapeChanged(): void;
                    /**
                     * Raises the shapeConfirmed event.
                     */
                    protected __shapeConfirmed(): void;
                    /**
                     * Returns a colour with a correspondingly changed fourth channel.
                     * @param color
                     * @param value
                     */
                    protected __transparentColor(color: string, value: number): string;
                    /**
                     * Moves the angle into range from 0 to (2*Math.PI)rad | (360deg).
                     * @param angle
                     */
                    protected __fitAngle(angle: number): number;
                    /**
                     * Returns the next angle to the passed one that is in the specified interval.
                     * @param angle
                     * @param referenceAngle
                     * @param interval Must not be zero.
                     */
                    private __mapInterval;
                    /**
                     * Returns the next angle to the passed one that is in the specified interval.
                     * Updates necessary rotationDrag infos.
                     * this.__$props.AngleInterval must not be zero.
                     * @param angle
                     */
                    protected __forceAngleInterval(angle: number): number;
                    /**
                     * Returns an angle that is valid and doesn't excite the borders.
                     * @param angle
                     */
                    protected __forceAngleIntoRestrictions(angle: number): number;
                    /**
                     * Returns the minimal distance between two angles and the direction. True: forward, false: backward.
                     */
                    protected __minAngleDiff(first: number, second: number): {
                        distance: number;
                        direction: boolean;
                    };
                    /**
                     * Returns the validity of the current shape data property or the specified shapeData.
                     * Subclasses overwrite this method.
                     */
                    shapeDataIsValid(shapeData?: any): boolean;
                    /**
                     *
                     */
                    static roundShapeData(shapeData: Types.TcVnRotatedRectangle | Polygon): Types.TcVnRotatedRectangle | Polygon;
                    /************************************************************
                     * Category: Color
                     */
                    /**
                     * Property: StrokeColor
                     */
                    getStrokeColor(): SolidColor;
                    setStrokeColor(value: SolidColor): void;
                    protected __processStrokeColor(): void;
                    /**
                     * Property: HandleColor
                     */
                    getHandleColor(): SolidColor;
                    setHandleColor(value: SolidColor): void;
                    protected __processHandleColor(): void;
                    /************************************************************
                     * Category: Layout
                     */
                    /**
                     * Property: Width
                     */
                    setWidth(newValue: number | null): void;
                    __processWidth(): void;
                    /**
                     * Property: Height
                     */
                    setHeight(newValue: number | null): void;
                    __processHeight(): void;
                    /**
                     * Prevent multiple calls of processWidth/Height
                     */
                    protected __preventProcessWidthAndHeight: boolean;
                    setWidthAndHeight(width: number, height: number): void;
                    private __processWidthAndHeightChangeInternal;
                    protected abstract __processWidthAndHeightChange(): void;
                    /************************************************************
                     * Category: Common
                     */
                    /**
                     * Property: ShapeData
                     */
                    abstract getShapeData(): any;
                    abstract setShapeData(value: any): void;
                    /**
                     * Method: clear
                     */
                    abstract clear(): void;
                    /************************************************************
                     * Category: Usage
                     */
                    /**
                     * Property: RotationHandle
                     */
                    getRotationHandle(): boolean;
                    setRotationHandle(value: boolean): void;
                    /**
                     * Property: Boundary
                     */
                    getBoundary(): TcHmiVnShape.Schema.Boundary;
                    setBoundary(value: TcHmiVnShape.Schema.Boundary): void;
                    protected __processBoundary(): void;
                    /**
                     * Property: ShapeIsInBoundary
                     */
                    getShapeIsInBoundary(): boolean;
                    protected __setShapeIsInBoundaryInternal(value: boolean): void;
                    /**
                     * Property: ShapeDataUpdate
                     */
                    getDataUpdate(): Vision.DataUpdate;
                    setDataUpdate(value: Vision.DataUpdate): void;
                    /************************************************************
                     * Category: Appearance
                     */
                    /**
                     * Property: StrokeThickness
                     */
                    getStrokeThickness(): number;
                    setStrokeThickness(value: number): void;
                    protected __processStrokeThickness(): void;
                    /**
                     * Property: StrokeThicknessUnit
                     */
                    getStrokeThicknessUnit(): 'px';
                    setStrokeThicknessUnit(value: 'px'): void;
                    /**
                     * Property: HandleSize
                     */
                    getHandleSize(): number;
                    setHandleSize(value: number): void;
                    protected __processHandleSize(): void;
                    /**
                     * Property: HandleSizeUnit
                     */
                    getHandleSizeUnit(): 'px';
                    setHandleSizeUnit(value: 'px'): void;
                    /**
                     * Property: ClickableSize
                     */
                    getClickableSize(): number;
                    setClickableSize(value: number): void;
                    protected __processClickableSize(): void;
                    /**
                     * Property: ClickableSizeUnit
                     */
                    getClickableSizeUnit(): 'px';
                    setClickableSizeUnit(value: 'px'): void;
                    /************************************************************
                     * Category: Advanced
                     */
                    /**
                     * Property: Offset
                     */
                    getOffset(): Vector2;
                    setOffset(value: Vector2): void;
                    protected __processOffset(): void;
                    /**
                     * Property: Scale
                     */
                    getScale(): number;
                    setScale(value: number): void;
                    protected __processScale(): void;
                    /**
                     * Changes size and offset and scale at once, to prevent multiple calls of Ui update
                     */
                    protected __preventProcessOffsetAndScale: boolean;
                    setOffsetAndScale(offset: Vector2, scale: number): void;
                    protected __processOffsetAndScaleChangeInternal(): void;
                    protected abstract __processOffsetAndScaleChange(): void;
                    protected abstract __updateShapeData(): void;
                }
                module TcHmiVnShape {
                    class Properties extends TcHmiVnControl.Properties {
                        StrokeColor: SolidColor;
                        HandleColor: SolidColor;
                        RotationHandle: boolean;
                        AngleInterval: number;
                        Boundary: TcHmiVnShape.Schema.Boundary;
                        ShapeIsInBoundary: boolean;
                        DataUpdate: Vision.DataUpdate;
                        StrokeThickness: number;
                        HandleSize: number;
                        ClickableSize: number;
                        Offset: Vector2;
                        Scale: number;
                    }
                    class SubControls extends TcHmiVnControl.SubControls {
                    }
                    module Schema {
                        type Boundary = {
                            isActive: boolean;
                            x: number;
                            y: number;
                            width: number;
                            height: number;
                        };
                    }
                    type RotationDrag = {
                        referenceAngle: number;
                        runningAngle: number;
                        lastMouseAngle: number;
                        lastAngle: number;
                    };
                    type ShapeDrag = {
                        referencePosition: Vector;
                        lastPosition: Vector;
                        borders: Array<number>;
                    };
                    enum CallBackMethod {
                        MouseEnd = 0,
                        MouseLeaveSVG = 1
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiVnShape.d.ts.map