import {DisabledTagProps, Tag} from "./base-tag";

export function GCPTag({disabled}: DisabledTagProps = {disabled: false}) {
    return <Tag href="/learn/google-cloud-platform" disabled={disabled} className="border-blue-700 bg-blue-200">GCP</Tag>;
}

export default function MyApp() {
    return <GCPTag />
}
