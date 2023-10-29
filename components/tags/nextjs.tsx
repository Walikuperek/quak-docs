import {DisabledTagProps, Tag} from "./base-tag";

export function NextJSTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/next-js"
                disabled={disabled}
                className="border-gray-500 bg-gray-800 text-white">Next.js</Tag>;
}

export default function MyApp() {
    return <NextJSTag/>
}
