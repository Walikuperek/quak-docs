export type TagProps = { href: string, className?: string, disabled?: boolean, children?: React.ReactNode };
export type DisabledTagProps = { disabled?: boolean };

export function Tag({children, href, className, disabled}: TagProps) {
    const disabledClassName = "h-9 border-2 flex align-center justify-center w-fit py-1 px-5 text-black rounded-3xl";
    const baseClassName = disabled ? disabledClassName : "h-9 border-2 flex align-center justify-center hover:underline w-fit py-1 px-5 text-black rounded-3xl";
    const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

    if (disabled) {
        return <div className={finalClassName}>{children}</div>;
    }
    return <a href={href} className={finalClassName}>{children}</a>;
}

export default function MyApp({children, href, className, disabled}: TagProps) {
    return <Tag href={href} className={className} disabled={disabled}>{children}</Tag>
}
