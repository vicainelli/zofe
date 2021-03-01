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
    <div className="w-full px-10 py-8 rounded-xl border-0 bg-gray-100">
      <DiscussionEmbed shortname={disqusShortname} config={config} />
    </div>
  )
}

export default Comments
