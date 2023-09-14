
// import SocialShare from "../../components/Common/SocialShare";
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const Post = async ({ params: { slug } }) => {
    const client = require("contentful").createClient({ space: space, accessToken: accessToken, });
    const posts = await client.getEntries({ content_type: "blogPost", });
    const post = posts.items.find((post) => post.fields.slug === slug);

    const paragraphs = post.fields.body.split("\n").filter((p) => p !== "");
    return (
        <article className={'prose prose-xl mx-auto mt-10'}>
            {/* <SocialShare
                    title={post.fields.title}
                    subtitle={post.fields.subtitle || ''}
                    description={post.fields.description}
                    url={`https://www.100rgmujeres.com.ar/mujeres/${post.fields.slug}`}
                    img={"https:" + post.fields.heroImage.fields.file.url}
                /> */}
            <h1 className={'font-serif text-center'}>{post.fields.title}</h1>
            <h2 className={'text-center'}>{post.fields.subtitle || ""}</h2>
            <img className={'w-full aspect-square border p-2 rounded-lg shadow object-cover'} src={"https:" + post.fields.heroImage.fields.file.url} />

            {post.fields.audio && <audio controls className={'styles.audio'}>
                <source src={`https:${post.fields.audio.fields.file.url}`} type='audio/mp3' />
            </audio>}

            {paragraphs.slice(0, paragraphs.length / 2).map((p, index) => (
                <p key={index} className={''} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <img className={'w-full aspect-square border p-2 rounded-lg shadow object-cover'} src={"https:" + post.fields.fotoVieja.fields.file.url} />
            {paragraphs.slice(Math.max(paragraphs.length / 2, -1)).map((p, index) => (<p key={index} className={''} dangerouslySetInnerHTML={{ __html: p }} />))}
            {post.fields.foto3 && <img className={'w-full aspect-square border p-2 rounded-lg shadow object-cover'} src={"https:" + post.fields.foto3.fields.file.url} />}
            {post.fields.enlace && <a href={post.fields.enlace} target="_blank">Ver página de {post.fields.title}</a>}

        </article>
    );
}

export default Post