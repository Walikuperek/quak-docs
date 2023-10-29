import {DisabledTagProps, Tag} from "./base-tag";

export function ExpressJSTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/express-js"
                disabled={disabled}
                className="border-zinc-400 bg-zinc-200">ExpressJS</Tag>;
}

export default function MyApp() {
    return <ExpressJSTag/>
}
