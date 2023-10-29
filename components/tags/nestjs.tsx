import {DisabledTagProps, Tag} from "./base-tag";

export function NestJSTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/nest-js"
                disabled={disabled}
                className="border-rose-800 bg-rose-700 text-white">NestJS</Tag>;
}

export default function MyApp() {
    return <NestJSTag/>
}
