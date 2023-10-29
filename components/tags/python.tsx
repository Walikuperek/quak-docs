import {DisabledTagProps, Tag} from "./base-tag";

export function PythonTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/python" disabled={disabled} className="border-yellow-400 bg-blue-600 text-white">Python</Tag>;
}

export default function MyApp() {
    return <PythonTag />
}
