export type NextImageSrc =
    | {
          src: string;
          height: number;
          width: number;
          blurDataURL?: string;
      }
    | string;


export type SvgType = {
  widths: string | number | undefined;
  heights: string | number | undefined;
}