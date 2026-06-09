import Link from "next/link";

interface Props {
    links: {
        [key: string]: { name: string, to: string }
    }
    logo: string
}

function Header({ links, logo }: Props) {
    const items = Object.values(links || {})
    return (
        <header className="flex ">
            <div>
                <div dangerouslySetInnerHTML={{ __html: logo }} />
            </div>
            <div>
                <div className="flex gap-2">
                    {items.map((item, index) => (
                        <Link key={index} href={item.to}>{item.name}</Link>
                    ))}
                </div>
            </div>
            <div>
                <Link href={}>Вход</Link>
                <Link href={}>Регистрация</Link>
            </div>
        </header>
    );
}

export default Header;