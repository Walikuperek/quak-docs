import {DisabledTagProps, Tag} from "./base-tag";

export function ReactTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/react" disabled={disabled} className="border-sky-500 bg-gray-800 text-white">React</Tag>;
}

export default function MyApp() {
    return <ReactTag />
}
