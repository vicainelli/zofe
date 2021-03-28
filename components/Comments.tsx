import { DiscussionEmbed } from 'disqus-react'

type CommentsProps = {
  slug: string
}

const Comments = ({ slug }: CommentsProps) => {
  const disqusShortname = 'zofe'

  const config = {
    url: `https://zofe.com.br/posts/${slug}`,
    identifier: slug,
  }

  return (
    <div className="w-read
      w-full
      md:px-10
      px-2
      mt-8
      py-4
      rounded-xl
      border-0
      bg-gray-200"
    >
      <DiscussionEmbed shortname={disqusShortname} config={config} />
    </div>
  )
}

export default Comments
