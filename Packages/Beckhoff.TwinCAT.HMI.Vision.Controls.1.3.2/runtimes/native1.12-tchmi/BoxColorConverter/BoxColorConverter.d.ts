declare module TcHmi {
    module Functions {
        module Beckhoff {
            module Vision {
                type ColorValue = TcHmi.Controls.Beckhoff.Vision.TcHmiVnColor.Schema.ColorValue;
                type Space = TcHmi.Controls.Beckhoff.Vision.Color.Space;
                type ElementType = TcHmi.Controls.Beckhoff.Vision.Color.ElementType;
                const Space: typeof Controls.Beckhoff.Vision.Color.Space;
                const ElementType: typeof Controls.Beckhoff.Vision.Color.ElementType;
                export function BoxColorConverter(ctx: SelectableRequired<TcHmi.Context, 'success' | 'error'> | null, color: ColorValue, reverse: boolean, format: Space, pixelType: ElementType): Promise<ColorValue | null>;
                export {};
            }
        }
    }
}
//# sourceMappingURL=BoxColorConverter.d.ts.map