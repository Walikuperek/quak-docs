import {DisabledTagProps, Tag} from "./base-tag";

export function AngularTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/angular"
                disabled={disabled}
                className="border-rose-300 bg-rose-700 text-white">Angular</Tag>;
}

export default function MyApp() {
    return <AngularTag />
}
