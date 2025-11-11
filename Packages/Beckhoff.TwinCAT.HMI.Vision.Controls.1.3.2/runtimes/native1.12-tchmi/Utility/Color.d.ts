declare let cv: any;
declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                module Color {
                    /**
                     * Enum used to specify conversions between color formats.
                     */
                    enum Space {
                        GRAY = "Gray",
                        RGB = "RGB",
                        RGBA = "RGBa",
                        HSV = "HSV",
                        HSV_FULL = "HSV FULL",
                        HLS = "HLS",
                        HLS_FULL = "HLS FULL",
                        Lab = "Lab",
                        YUV = "YUV",
                        YCrCb = "YCrCb"
                    }
                    /**
                     * Enum used to specify the pixel type or bit depth of images.
                     * Doc: https://infosys.beckhoff.com/index.php?content=../content/1031/tf7xxx_tc3_vision/5509156747.html&id=
                     * */
                    enum ElementType {
                        USINT = "8-Bit (USINT)",
                        UINT = "16-Bit (UINT)"
                    }
                    /**
                     * Enum used to specify pixel types in OpenCV.
                     * Doc: https://docs.opencv.org/3.4/d1/d1b/group__core__hal__interface.html
                     * */
                    enum PixelType {
                        CV_8UC1 = 0,
                        CV_8UC3 = 16,
                        CV_8UC4 = 24,
                        CV_32FC1 = 5,
                        CV_32FC3 = 21,
                        CV_32FC4 = 29
                    }
                    /**
                     * Enum used to specify the number of decimal places to round to.
                     */
                    enum Precision {
                        ZERO = "0 Decimals",
                        ONE = "1 Decimal",
                        TWO = "2 Decimals",
                        THREE = "3 Decimals",
                        UNROUNDED = "Unrounded"
                    }
                    /**
                     * Enum used to specify color conversions in OpenCV.
                     * Doc: https://docs.opencv.org/4.7.0/d8/d01/group__imgproc__color__conversions.html
                     * */
                    enum ColorConversionCode {
                        COLOR_RGB2RGBA = 0,
                        COLOR_RGBA2RGB = 1,
                        COLOR_RGB2GRAY = 7,
                        COLOR_GRAY2RGB = 8,
                        COLOR_GRAY2RGBA = 9,
                        COLOR_RGBA2GRAY = 11,
                        COLOR_RGB2YCrCb = 37,
                        COLOR_YCrCb2RGB = 39,
                        COLOR_RGB2HSV = 41,
                        COLOR_RGB2Lab = 45,
                        COLOR_RGB2Luv = 51,
                        COLOR_RGB2HLS = 53,
                        COLOR_HSV2RGB = 55,
                        COLOR_Lab2RGB = 57,
                        COLOR_Luv2RGB = 59,
                        COLOR_HLS2RGB = 61,
                        COLOR_RGB2HSV_FULL = 67,
                        COLOR_RGB2HLS_FULL = 69,
                        COLOR_HSV2RGB_FULL = 71,
                        COLOR_HLS2RGB_FULL = 73,
                        COLOR_RGB2YUV = 83,
                        COLOR_YUV2RGB = 85
                    }
                    /**
                     * @param pixelType
                     * @returns Array of functions: [0] is scaling in and [1] is scaling out.
                     */
                    function GetPixelTypeBasedScalings(pixelType: ElementType): [(color: number) => number, (color: number) => number];
                    /**
                     * Converts color spaces using OpenCV.
                     * @param color input color values
                     * @param conversion conversion code
                     * @returns converted color values
                     */
                    function convertColorOpenCV(color: TcHmiVnColor.Schema.ColorValue, conversion: ColorConversionCode): Promise<TcHmiVnColor.Schema.ColorValue>;
                    /**
                     * Rounds ColorValue.
                     * @param color ColorValue to round
                     */
                    function roundColorValue(color: TcHmiVnColor.Schema.ColorValue, precision: Precision): TcHmiVnColor.Schema.ColorValue;
                    /**
                     * Converts hex string to array with 8bit elements.
                     * Example: '#ff0000' -> [255, 0, 0]
                     * @param hex '#' prefix optional | even number of hex digits will be used
                     */
                    function convertHexStringToArray(hex: string): number[];
                    /**
                     * Converts array with 8bit elements to hex string
                     * Example: [255, 0, 0] -> '#ff0000'
                     * @param rgb
                     */
                    function convertArrayToHexString(rgb: number[]): string;
                    /**
                     * Returns true if passed string is a valid hex string and false otherwise.
                     * @param hex string to test
                     */
                    function isValidColorHexString(hex: string): boolean;
                }
            }
        }
    }
}
//# sourceMappingURL=Color.d.ts.map