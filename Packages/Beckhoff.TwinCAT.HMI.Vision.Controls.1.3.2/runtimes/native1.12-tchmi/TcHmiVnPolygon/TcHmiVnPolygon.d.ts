declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                class TcHmiVnPolygon extends TcHmiVnShape {
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
                    protected __$props: TcHmiVnPolygon.Properties;
                    /**
                     * SubControls
                     */
                    protected __$controls: TcHmiVnPolygon.SubControls;
                    /**
                     * Will be called after control is attached to DOM.
                     */
                    __attach(): void;
                    /************************************************************
                     * DOM elements
                     */
                    /**
                     * DOM element of point handles
                     */
                    protected __pointHandles: JQuery<SVGCircleElement>[];
                    /**
                     * DOM element of polygon shape
                     */
                    protected __domPolygon: JQuery<SVGPolylineElement> | null;
                    /**
                     * DOM element of rotating mouse cursor
                     */
                    protected __rotatingCursor: JQuery<SVGImageElement> | null;
                    /**
                     * DOM element of rotation handle
                     */
                    protected __rotationHandle: JQuery<SVGCircleElement> | null;
                    /************************************************************
                     * Shape data
                     */
                    protected __polygon: TcHmiVnPolygon.Polygon;
                    protected __rotationHandlePosition: Vector;
                    protected __center: Vector;
                    protected __polygonIsCompleted: boolean;
                    protected __rotationHandleAngle: number;
                    protected __activeDrag: TcHmiVnPolygon.ActiveDrag;
                    /************************************************************
                     * Drag information
                     */
                    protected __pointDrag: TcHmiVnPolygon.PointDrag;
                    protected __rotationDragPolygon: TcHmiVnPolygon.RotationDrag;
                    protected __lastMouseMovePosition: Vector;
                    protected __lastMouseAngle: number;
                    protected __oldPolygon: TcHmiVnPolygon.Polygon | null;
                    /**
                     * Registers listeners for events on the SVG element.
                     */
                    protected __registerStaticListeners(): void;
                    /**
                     * Unregisters global gesture event listeners
                     */
                    protected __unregisterGlobalEvents(): void;
                    /**
                     * Registers elements for handles.
                     */
                    protected __registerHandleElements(): void;
                    /**
                     * Is called up either by pressing the mouse button or by starting a touch.
                     * @param event
                     */
                    protected __handleSurfaceMouseDown(event: JQuery.Event): void;
                    /**
                     * Is called up either by pressing the mouse button or by starting a touch.
                     * @param event
                     */
                    protected __shapeDragHandler(event: JQuery.Event, outsideHandle?: boolean): void;
                    /**
                     * Is called up either by pressing the mouse button or by starting a touch.
                     * @param index
                     * @param event
                     */
                    protected __circleDragHandler(event: JQuery.Event, index: number): void;
                    /**
                     * Is called up either by pressing the mouse button or by starting a touch.
                     * @param event
                     */
                    protected __handleRotationMouseDown(event: JQuery.Event): void;
                    protected __handleMouseMove(event: JQuery.Event | MouseEvent | TouchEvent): void;
                    /**
                     * Shifts the polygon data by the specified delta Vector.
                     * @param delta
                     */
                    protected __dragPolygon(delta: Vector): void;
                    /**
                     * Should be trigger when pointing device leaves the observed area.
                     * (either by ending a click).
                     * @param event
                     */
                    protected __handleMouseLeave(event: MouseEvent): void;
                    protected __handleMouseUp(event: JQuery.Event | MouseEvent | TouchEvent): void;
                    /**
                     * Updates the line shape based on data in this.__points.
                     */
                    protected __updateUI(): void;
                    /**
                     * Updates the outside handle
                     */
                    protected __updateOutsideHandle(): void;
                    /**
                     * Deactivates the rotating cursor.
                     */
                    protected __stopRotatingCursor(): void;
                    /**
                     * Creates an point with handle
                     * @param position
                     */
                    protected __createPointAndHandle(position: Vector): void;
                    /**
                     * Creates an handle
                     * @param position
                     * @param index
                     */
                    protected __createHandle(position: Vector, index: number): void;
                    /**
                     * Moves the shape within the boundaries.
                     */
                    protected __moveShapeInside(position: Vector): void;
                    /**
                     * Updates the center of the polygon to this.__rotationDrag.center.
                     * The center is needed to rotate the polygon and to show the rotating curser in the correct angle.
                     */
                    protected __updateCenter(): void;
                    /**
                     * Updates the ShapeData property based on the values in this.__polygon.
                     * @param polygon
                     */
                    protected __updateShapeData(oldPolygon?: TcHmiVnPolygon.Polygon | null, clearOnUncompleted?: boolean, updateCenter?: boolean, setShapeData?: boolean): void;
                    /**
                     * Updates whether the shape is in the specified boundary
                     */
                    protected __updateShapeIsInBoundary(): void;
                    /**
                     * Clears the state of the polygon as if none was ever created.
                     */
                    protected __clearPolygon(): void;
                    /**
                     * @returns the validity of the current shape data property or the specified shapeData.
                     */
                    shapeDataIsValid(shapeData?: any): boolean;
                    /**
                     * @returns the validity of the passed polygon shape data.
                     * @param polygon
                     */
                    static polygonDataIsValid(polygon: any): boolean;
                    /**
                     * @returns rounded polygon.
                     * @param polygon
                     */
                    static roundShapeData(polygon: Polygon): Polygon;
                    /************************************************************
                     * Category: Color
                     */
                    /**
                     * Property: HandleColor
                     */
                    protected __processHandleColor(): void;
                    /**
                     * Property: StrokeColor
                     */
                    protected __processStrokeColor(): void;
                    /************************************************************
                     * Category: Layout
                     */
                    /**
                     * Property: Width / Height
                     */
                    protected __processWidthAndHeightChange(): void;
                    /************************************************************
                     * Category: Common
                     */
                    /**
                     * Property: ShapeData
                     */
                    getShapeData(): Polygon;
                    setShapeData(value: Polygon): void;
                    protected __setShapeDataInternal(value: Polygon): void;
                    protected __processShapeData(newValue: Polygon, oldValue: Polygon, internal: boolean): void;
                    /**
                     * Property: MaxPoints
                     */
                    getNumPoints(): number;
                    setNumPoints(value: number): void;
                    protected __processNumPoints(value: number): void;
                    /**
                     * Property: Closed
                     */
                    getClosed(): boolean;
                    setClosed(value: boolean): void;
                    protected __processClosed(): void;
                    /**
                     * Method: clear
                     */
                    clear(): void;
                    /************************************************************
                     * Category: Usage
                     */
                    /**
                     * Property: RotationHandle
                     */
                    protected __processRotationHandle(): void;
                    /**
                     * Property: AngleInterval
                     */
                    getAngleInterval(): number;
                    setAngleInterval(value: number): void;
                    /************************************************************
                     * Category: Appearance
                     */
                    /**
                     * Property: ClickableSize
                     */
                    protected __processClickableSize(): void;
                    protected __processStrokeThickness(): void;
                    protected __processHandleSize(): void;
                    /************************************************************
                     * Category: Advanced
                     */
                    /**
                     * Property: DataOffset / Scale
                     */
                    protected __processOffsetAndScaleChange(): void;
                }
                module TcHmiVnPolygon {
                    class Properties extends TcHmiVnShape.Properties {
                        ShapeData: Vision.Polygon;
                        NumPoints: number;
                        Closed: boolean;
                    }
                    class SubControls extends TcHmiVnShape.SubControls {
                    }
                    class Polygon {
                        constructor(points: Vector[]);
                        isComplete: boolean;
                        points: Vector[];
                        copy(): Polygon;
                        differsTo(polygon: Polygon): boolean;
                    }
                    type RotationDrag = {
                        referencePolygon: Vector[];
                    };
                    type PointDrag = {
                        pointIndex: number;
                        lastPosition: Vector;
                    };
                    enum ActiveDrag {
                        None = 0,
                        Point = 1,
                        Shape = 2,
                        Rotation = 3
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiVnPolygon.d.ts.map