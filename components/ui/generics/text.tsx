import {colors, TextColor} from "./colors";

export type TextProps = {
    text?: string;
    textLines?: string[];
    color?: TextColor;
    className?: string;
}

export function Text({text, textLines, color, className}: TextProps) {
    let linesCount = 0;
    let textColor = '';
    if (color) {
        textColor = colors[color];
    }
    if (text) {
        return <p className={textColor}>{text}</p>
    }
    if (!textLines) {
        return <>Provide text or textLines</>
    }
    const lastLineClassName = className ? `"mb-10 ${textColor} ${className}` : `"mb-10 ${textColor}`;
    return (
        <ul className="p-0">
            {textLines.map(line => {
                linesCount++;
                if (linesCount === textLines.length) {
                    return <li key={linesCount}><p className={lastLineClassName}>{line}</p></li>
                }
                return <li key={linesCount}><p className={textColor}>{line}</p></li>
            })}
        </ul>
    );
}

export default function MyApp({text, textLines, color}: TextProps) {
    return <Text text={text} textLines={textLines} color={color} />
}
