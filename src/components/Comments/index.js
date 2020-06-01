import React from 'react'
import Disqus from 'disqus-react'

class Comments extends React.Component {
  render() {
    const disqusShortname = 'zofe'
    const disqusConfig = {
      url: `https://zofe.com.br/posts/${this.props.slug}`,
      identifier: this.props.slug,
      title: this.props.title,
    }

    return (
      <div className="row">
        <h1>{this.props.title}</h1>
        <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
          Comments
        </Disqus.CommentCount>
        <p>{this.props.body}</p>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    )
  }
}

export default Comments
