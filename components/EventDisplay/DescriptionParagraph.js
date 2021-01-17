import hydrate from 'next-mdx-remote/hydrate'



export default function DescriptionParagraph({ source }) {
    const content = hydrate(source)
    return (
        <div>
            <main>{content}</main>
        </div>
    )
}
