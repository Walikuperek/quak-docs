import {colors, TextColor} from "./colors";

export type HeaderSizeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeaderTextProps = {
    color?: TextColor;
    size?: HeaderSizeType;
    children?: React.ReactNode;
}

export function HeaderText({color, size, children}: HeaderTextProps) {
    let textColor = '';
    if (color) {
        textColor = colors[color];
    }
    textColor = " mb-2 font-bold " + textColor;
    const headerSize = size ? size : 'h1';
    const h1 = () => <h1 className={"text-4xl" + textColor}>{children}</h1>;
    const h2 = () => <h2 className={"text-4xl" + textColor}>{children}</h2>;
    const h3 = () => <h3 className={"text-lg" + textColor}>{children}</h3>;
    const h4 = () => <h4 className={"text-base" + textColor}>{children}</h4>;
    const h5 = () => <h5 className={"text-sm" + textColor}>{children}</h5>;
    const h6 = () => <h6 className={"text-xs" + textColor}>{children}</h6>;
    const headerSizeMap = {
        'h1': h1,
        'h2': h2,
        'h3': h3,
        'h4': h4,
        'h5': h5,
        'h6': h6
    };
    const Header = headerSizeMap[headerSize];
    return <Header />
}

export default function MyApp({children, color, size}: HeaderTextProps) {
    return <HeaderText color={color} size={size}>{children}</HeaderText>
}
