import {DisabledTagProps, Tag} from "./base-tag";

export function NodeTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/node"
                disabled={disabled}
                className="border-green-500 bg-green-800 text-white">Node.js</Tag>;
}

export default function MyApp() {
    return <NodeTag/>
}
