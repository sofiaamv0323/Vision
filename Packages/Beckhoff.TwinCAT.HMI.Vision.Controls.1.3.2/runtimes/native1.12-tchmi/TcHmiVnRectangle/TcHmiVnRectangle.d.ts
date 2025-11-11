declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                class TcHmiVnRectangle extends TcHmiVnShape {
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
                    protected __$props: TcHmiVnRectangle.Properties;
                    /**
                     * SubControls
                     */
                    protected __$controls: TcHmiVnRectangle.SubControls;
                    /**
                     * Will be called after control is attached to DOM.
                     */
                    protected __uiUpdateAllowed: boolean;
                    __attach(): void;
                    /************************************************************
                     * DOM elements
                     */
                    /**
                     * DOM element for rectangle shape
                     */
                    protected __domRect: JQuery<SVGRectElement> | null;
                    /**
                     * DOM element for ellipse shape
                     */
                    protected __domEllipse: JQuery<SVGEllipseElement> | null;
                    /**
                     * DOM elements of all handles
                     */
                    protected __handleElements: TcHmiVnRectangle.HandleElements;
                    /**
                     * DOM element of origin handle
                     */
                    protected __originElement: JQuery<SVGCircleElement> | null;
                    /************************************************************
                     * Shape data
                     */
                    /**
                     * Positions and meta data of all handles
                     */
                    protected __handleData: TcHmiVnRectangle.AllHandleData;
                    /**
                     * Data regarding the origin handle
                     */
                    protected __origin: {
                        isActive: boolean;
                        position: Vector;
                        timestamp: number;
                        isTouching: boolean;
                    };
                    /**
                     * Internal representation of the rectangle
                     */
                    protected __rectangle: TcHmiVnRectangle.RotatedRectangle;
                    /************************************************************
                     * Drag information
                     */
                    protected __cornerDrag: TcHmiVnRectangle.CornerDrag;
                    protected __edgeDrag: TcHmiVnRectangle.EdgeDrag;
                    protected __activeDrag: TcHmiVnRectangle.ActiveDrag;
                    protected __initiating: boolean;
                    protected __oldRectangle: TcHmiVnRectangle.RotatedRectangle | null;
                    /**
                     * Registers listeners for events on the SVG element.
                     */
                    protected __registerStaticListeners(): void;
                    /**
                     * Registers global gesture event listeners
                     */
                    protected __registerGlobalEvents(): void;
                    /**
                     * Unregisters global gesture event listeners
                     */
                    protected __unregisterGlobalEvents(): void;
                    /**
                     * Registers DOM elements for shapes.
                     */
                    protected __registerShapeElements(): void;
                    /**
                     * Registers DOM elements for handles.
                     */
                    protected __registerHandleElements(): void;
                    /**
                     * Registers / Unregisters shape handle event listeners based on this.__$props.ShapeDragging
                     */
                    protected __shapeDragHandlerRegistered: boolean;
                    protected __updateShapeHandleEventListeners(): void;
                    /**
                     * Registers listeners for events on the handles.
                     */
                    protected __registerHandleEventListeners(): void;
                    /**
                     * Is called up either by pressing the mouse button or by starting a touch.
                     * @param event
                     */
                    protected __handleSurfaceMouseDown(event: JQuery.Event): void;
                    /**
                     * Handler for shape and center mouse down
                     * @param event
                     * @param outsideHandle is the outsideHandle the trigger?
                     */
                    protected __shapeDragHandler(event: JQuery.Event, outsideHandle?: boolean): void;
                    /**
                     * Handler for edge mouse down
                     * @param event
                     * @param i edge number
                     */
                    protected __edgeDragHandler(event: JQuery.Event, i: number): void;
                    /**
                     * Handler for corner mouse down
                     * @param event
                     * @param i number of corner
                     */
                    protected __cornerDragHandler(event: JQuery.Event, i: number): void;
                    /**
                     * Handler for rotation mouse down
                     * @param event
                     */
                    protected __rotationDragHandler(event: JQuery.Event): void;
                    /**
                     * @returns the position moved inside boundary if that is active and position was outside there.
                     * @param position position to move inside.
                     */
                    protected __trimPoint(position: Vector): Vector;
                    protected __isRotated(): boolean;
                    /**
                     * Inits the edge drag
                     */
                    protected __initEdgeDrag(i: number): void;
                    /**
                     * Inits the corner drag
                     * @param position mouse position at the time of drag start. Is used to avoid malfunctions with a defined shapeScope.
                     */
                    protected __initCornerDrag(): void;
                    protected __updateShapeDragBorders(handleData: Vector[], referencePoint: Vector): void;
                    /**
                     * Should be trigger when pointing device moves on the observed area.
                     * @param position position of the cursor relative to this control
                     */
                    private counter;
                    protected __handleMouseMove(event: JQuery.Event | MouseEvent | TouchEvent | Vector): void;
                    /**
                     * Should be trigger when pointing device leaves the observed area.
                     * (either by ending a click).
                     * @param event
                     */
                    protected __handleMouseLeave(event: MouseEvent): void;
                    protected __handleMouseUp(event: JQuery.Event | MouseEvent | TouchEvent): void;
                    /**
                     * Updates all UI elements.
                     */
                    protected __updateUI(): void;
                    /**
                     * Updates the shape element in the UI based on __rectangle.
                     */
                    protected __updateShapeUI(): void;
                    /**
                     * Updates all handle elements in the UI based on handleData.
                     */
                    protected __updateHandleUI(): void;
                    /**
                     * Deactivates the rotating cursor.
                     */
                    protected __stopRotatingCursor(): void;
                    /**
                     * Moves the shape within the boundaries.
                     */
                    protected __moveShapeInside(): void;
                    /**
                     * Updates the ShapeData property based on the values in this.__rectangle.
                     * @param rectangle
                     */
                    protected __updateShapeData(oldRectangle?: TcHmiVnRectangle.RotatedRectangle | null, setShapeData?: boolean): void;
                    /**
                     * @returns the corner positions of the specified rectangle.
                     * @param rectangle
                     */
                    protected __getCornerPositions(rectangle: TcHmiVnRectangle.RotatedRectangle): Vector[];
                    /**
                     * @returns the edge positions of the specified rectangle.
                     * @param rectangle
                     */
                    protected __getEdgePositions(rectangle: TcHmiVnRectangle.RotatedRectangle): Vector[];
                    /**
                     * Updates handleData based on the values in rectangle.
                     * @param handleData
                     */
                    protected __updateHandleData(): void;
                    protected __updateRotationHandleData(): void;
                    /**
                     * Updates outsideHandleData
                     */
                    protected __updateOutsideHandleData(): void;
                    /**
                     * Updates whether the shape is in the specified boundary
                     */
                    protected __updateShapeIsInBoundary(): void;
                    /**
                     * Clears the state of the rectangle as if none was ever created.
                     */
                    protected __clearRectangle(): void;
                    /**
                     *
                     * @param rectangle
                     * @returns
                     */
                    protected __convertRectangle(rectangle: TcHmiVnRectangle.RotatedRectangle): Types.TcVnRotatedRectangle;
                    /**
                     * Returns the validity of the current shape data property or the specified shapeData.
                     */
                    shapeDataIsValid(shapeData?: any): boolean;
                    /**
                     * Returns the validity of the passed rectangle shape data.
                     * @param rectangle
                     */
                    static rectangleDataIsValid(rectangle: any): boolean;
                    /**
                     * @returns rounded rectangle.
                     * @param rectangle
                     */
                    static roundShapeData(rectangle: Types.TcVnRotatedRectangle): Types.TcVnRotatedRectangle;
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
                    getShapeData(): Types.TcVnRotatedRectangle;
                    setShapeData(value: Types.TcVnRotatedRectangle): void;
                    protected __setShapeDataInternal(value: Types.TcVnRotatedRectangle): void;
                    protected __processShapeData(value: Types.TcVnRotatedRectangle, oldValue?: Types.TcVnRotatedRectangle, internal?: boolean): void;
                    /**
                     * Property: AspectRatio
                     */
                    getAspectRatio(): number;
                    setAspectRatio(value: number): void;
                    protected __processAspectRatio(): void;
                    /**
                     * Method: clear
                     */
                    clear(): void;
                    /************************************************************
                     * Category: Usage
                     */
                    /**
                     * Property: InitialSelection
                     */
                    getInitialSelection(): TcHmiVnRectangle.Schema.InitialSelection;
                    setInitialSelection(value: TcHmiVnRectangle.Schema.InitialSelection): void;
                    /**
                     * Property: CornerHandles
                     */
                    getCornerHandles(): boolean;
                    setCornerHandles(value: boolean): void;
                    protected __processCornerHandles(): void;
                    /**
                     * Property: EdgeHandles
                     */
                    getEdgeHandles(): boolean;
                    setEdgeHandles(value: boolean): void;
                    protected __processEdgeHandles(): void;
                    /**
                     * Property: CenterHandle
                     */
                    getCenterHandle(): boolean;
                    setCenterHandle(value: boolean): void;
                    protected __processCenterHandle(): void;
                    /**
                     * Property: RotationHandle
                     */
                    protected __processRotationHandle(): void;
                    /**
                     * Property: ShapeDragging
                     */
                    getShapeDragging(): boolean;
                    setShapeDragging(value: boolean): void;
                    protected __processShapeDragging(value: boolean): void;
                    /**
                     * Property: AngleInterval
                     */
                    getAngleInterval(): number;
                    setAngleInterval(value: number): void;
                    /************************************************************
                     * Category: Appearance
                     */
                    /**
                     * Property: StrokeShape
                     */
                    getStrokeShape(): TcHmiVnRectangle.Schema.StrokeShape;
                    setStrokeShape(value: TcHmiVnRectangle.Schema.StrokeShape): void;
                    protected __processStrokeShape(value: TcHmiVnRectangle.Schema.StrokeShape): void;
                    /**
                     * Clickable size of handles
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
                module TcHmiVnRectangle {
                    /**
                     * Sets names and default values of this-control's properties.
                     */
                    class Properties extends TcHmiVnShape.Properties {
                        ShapeData: Types.TcVnRotatedRectangle;
                        AspectRatio: number;
                        InitialSelection: Schema.InitialSelection;
                        CornerHandles: boolean;
                        EdgeHandles: boolean;
                        CenterHandle: boolean;
                        ShapeDragging: boolean;
                        StrokeShape: Schema.StrokeShape;
                    }
                    class SubControls extends TcHmiVnShape.SubControls {
                    }
                    module Schema {
                        enum StrokeShape {
                            Rectangle = "Rectangle",
                            Ellipse = "Ellipse"
                        }
                        enum InitialSelection {
                            OnlyViaClicks = "OnlyViaClicks",
                            OnlyViaDrag = "OnlyViaDrag",
                            ViaBoth = "ViaBoth"
                        }
                        enum DragView {
                            Normal = "Normal",
                            Transparent = "Transparent"
                        }
                    }
                    type Rectangle = {
                        position: Vector;
                        size: Vector;
                    };
                    class RotatedRectangle {
                        constructor(isActive: boolean, center: Vector, size: Vector, angle: number);
                        isActive: boolean;
                        center: Vector;
                        size: Vector;
                        angle: number;
                        copy(): RotatedRectangle;
                    }
                    type AllHandleData = {
                        p: HandleData[];
                        e: HandleData[];
                        c: HandleData;
                        r: HandleData;
                    };
                    type HandleData = {
                        position: Vector;
                        cursor: string;
                    };
                    type HandleElements = {
                        p: JQuery<SVGCircleElement>[];
                        e: JQuery<SVGCircleElement>[];
                        c: JQuery<SVGCircleElement> | null;
                        r: JQuery<SVGCircleElement> | null;
                    };
                    type CornerDrag = {
                        directions: Vector[];
                        borderLines: StraightLine[];
                        minValues: number[];
                        maxValues: number[];
                        maxAspectRatioFactors: number[];
                        mousePosition: Vector;
                        fixedHandlePosition: Vector;
                        fixedHandlePositionOffset: Vector;
                        borderAllowed: boolean;
                        lastRectangleSize: Vector;
                    };
                    type EdgeDrag = {
                        fixedIndex: number;
                        minPos: number;
                        maxPos: number;
                        fixedPosition: Vector;
                        lastRectangleSize: Vector;
                    };
                    enum ActiveDrag {
                        None = 0,
                        Edge = 1,
                        Corner = 2,
                        Shape = 3,
                        Rotation = 4
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiVnRectangle.d.ts.map