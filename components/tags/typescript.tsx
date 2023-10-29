import {DisabledTagProps, Tag} from "./base-tag";

export function TSTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/typescript" disabled={disabled} className="border-blue-700 bg-blue-500 text-white">Typescript</Tag>;
}

export default function MyApp() {
    return <TSTag />
}
