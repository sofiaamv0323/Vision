declare module TcHmi {
    module Functions {
        module Beckhoff {
            module Vision {
                type Space = TcHmi.Controls.Beckhoff.Vision.Color.Space;
                type ElementType = TcHmi.Controls.Beckhoff.Vision.Color.ElementType;
                type Precision = TcHmi.Controls.Beckhoff.Vision.Color.Precision;
                type ColorValue = TcHmi.Controls.Beckhoff.Vision.TcHmiVnColor.Schema.ColorValue;
                const Space: typeof Controls.Beckhoff.Vision.Color.Space;
                const ElementType: typeof Controls.Beckhoff.Vision.Color.ElementType;
                const Precision: typeof Controls.Beckhoff.Vision.Color.Precision;
                export function ConvertColor(ctx: SelectableRequired<TcHmi.Context, 'success' | 'error'> | null, color: ColorValue, srcFormat: Space, destFormat: Space, precision?: Precision, srcPixelType?: ElementType, // Namings like here: https://infosys.beckhoff.com/index.php?content=../content/1031/tf7xxx_tc3_vision/13367249291.html&id=3094208978439131428
                destPixelType?: ElementType): Promise<ColorValue | null>;
                export {};
            }
        }
    }
}
//# sourceMappingURL=ConvertColor.d.ts.map