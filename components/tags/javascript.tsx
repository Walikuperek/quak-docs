import {DisabledTagProps, Tag} from "./base-tag";

export function JSTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/javascript" disabled={disabled} className="border-yellow-500 bg-yellow-200">Javascript</Tag>;
}

export default function MyApp() {
    return <JSTag />
}
