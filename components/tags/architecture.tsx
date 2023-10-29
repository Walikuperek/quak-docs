import {DisabledTagProps, Tag} from "./base-tag";

export function ArchitectureTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/architecture"
                disabled={disabled}
                className="border-indigo-300 bg-indigo-100">Architecture</Tag>;
}

export default function MyApp() {
    return <ArchitectureTag/>
}
