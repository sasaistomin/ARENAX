import Link from "next/link";
import './header.css';

interface Props {
    links: {
        [key: string]: { name: string, to: string }
    }
    logo: string
}

function Header({ links, logo }: Props) {
    const items = Object.values(links || {});

    return (
        <header className="flex justify-between items-center h-16 px-6 md:px-20 w-full">
            <div dangerouslySetInnerHTML={{ __html: logo }} />
            <div className="flex items-center gap-10">
                <nav className="flex gap-6">
                    {items.map((item, index) => (
                        <Link key={index} href={item.to}>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex gap-3">
                    <Link className="sign" href='/signIn'>Вход</Link>
                    <Link className="sign" href='/signUp'>РЕГИСТРАЦИЯ</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;