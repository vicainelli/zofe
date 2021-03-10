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
    <div className="w-read max-h-96 overscroll-contain overflow-y-auto my-12 rounded-sm bg-gray-100">
      <DiscussionEmbed shortname={disqusShortname} config={config} />
    </div>
  )
}

export default Comments
