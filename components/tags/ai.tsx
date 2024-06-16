import {DisabledTagProps, Tag} from "./base-tag";

export function AITag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/ai"
                disabled={disabled}
                className="border-emerald-300 bg-emerald-700 text-white">AI</Tag>;
}

export default function MyApp() {
    return <AITag />
}
