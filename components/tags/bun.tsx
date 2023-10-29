import {DisabledTagProps, Tag} from "./base-tag";

export function BunTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/bun" disabled={disabled} className="border-orange-300 bg-orange-50">Bun</Tag>;
}

export default function MyApp() {
    return <BunTag />
}
