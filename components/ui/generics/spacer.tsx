export function Spacer({height}: {height?: number}) {
    let spacerHeight = 10;
    if (height) {
        spacerHeight = height;
    }
    return <div className={"h-" + spacerHeight}>&nbsp;</div>;
}

export default function MyApp({height}: {height?: number}) {
    return <Spacer height={height} />
}
