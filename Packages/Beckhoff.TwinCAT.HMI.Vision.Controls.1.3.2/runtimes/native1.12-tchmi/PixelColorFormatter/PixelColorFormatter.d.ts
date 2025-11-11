declare module TcHmi {
    module Functions {
        module Beckhoff {
            module Vision {
                type Vector4 = TcHmi.Controls.Beckhoff.Vision.Vector4;
                type Space = TcHmi.Controls.Beckhoff.Vision.Color.Space;
                type ElementType = TcHmi.Controls.Beckhoff.Vision.Color.ElementType;
                type Precision = TcHmi.Controls.Beckhoff.Vision.Color.Precision;
                const Space: typeof Controls.Beckhoff.Vision.Color.Space;
                const ElementType: typeof Controls.Beckhoff.Vision.Color.ElementType;
                const Precision: typeof Controls.Beckhoff.Vision.Color.Precision;
                export function PixelColorFormatter(ctx: SelectableRequired<TcHmi.Context, 'success' | 'error'> | null, pixelColor: Vector4, format: Space, precision?: Precision, pixelType?: ElementType): Promise<string>;
                export {};
            }
        }
    }
}
//# sourceMappingURL=PixelColorFormatter.d.ts.map