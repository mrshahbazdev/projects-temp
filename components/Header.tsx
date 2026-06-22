interface HeaderProps {
    name: string
    subtitle: string
}

export default function Header({ name, subtitle }: HeaderProps) {
    return (
        <header className="pb-8 w-full flex flex-col items-center">
            <div className="space-y-3 text-center">
                <h1 className="text-[32px] md:text-[40px] font-[600] tracking-tight text-[#2c2c2c]">
                    {name}
                </h1>
                <p className="text-[17px] text-[#6b6b6b] font-[400]">
                    {subtitle}
                </p>
            </div>
        </header>
    )
}
