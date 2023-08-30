import { calcRem } from '@/styles/theme';



type BackgroundShapePropsType = {
    width: number;
    height: number;
    fromColor: string;
    toColor: string;
    top: string | number;
    left: string | number;
    gradientDegree?: number;
    rotationDegree?: number
    borderRadius?: string;
};

export function BackgroundShape({
    width,
    height,
    fromColor,
    toColor,
    top,
    left,
    gradientDegree = 0,
    rotationDegree = 0,
    borderRadius,
}: BackgroundShapePropsType) {
    return (
        <div
            style={{
                width: calcRem(width),
                height: calcRem(height),
                background: `linear-gradient(${gradientDegree}deg, ${fromColor}, ${toColor})`,
                top: typeof (top) === "string" ? top : calcRem(Number(top)),
                left: typeof (left) === "string" ? left : calcRem(Number(left)),
                transform: `rotate(${rotationDegree}deg)`,
                position: "absolute",
                borderRadius: borderRadius,
            }}
        ></div>
    )
}