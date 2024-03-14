import PostPreview from './post-preview'

export default function MoreStories({ posts }: any) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 ">
        {posts.map(({ node }: any) => (
          <span
            key={node.slug}
            className={
              "card card-normal card-body bg-secondary-content shadow-xl"
            }
          >
            <PostPreview
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
