import Link from 'next/link';

type CustomLinkProps = {
    href: string;
} & AnchorProps;

const CustomLink: React.FC<CustomLinkProps> = ({
    children,
    as,
    href,
    replace,
    scroll,
    shallow,
    passHref,
    ...props
}) => {
    if (href.includes('http') || href.includes('png')) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }
    if (href.includes('mailto:')) {
        return <a href={href}>{children}</a>;
    }

    return (
        <Link as={as} href={href} passHref={passHref} replace={replace} scroll={scroll} shallow={shallow}>
            {children}
        </Link>
    );
};

export default CustomLink;
