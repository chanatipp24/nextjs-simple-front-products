
// This function gets called at build time
export async function getServerSideProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://dummyjson.com/posts')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts: posts.posts,
        },
    }
}

export default function About({ posts }) {
    return (
        <ul>
            {posts.map((item) => {
                return(<li key={item.id}>{item.title}</li>)
            })
            }
        </ul>
    )
}
