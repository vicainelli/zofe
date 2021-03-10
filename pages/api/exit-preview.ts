import type { NowRequest, NowResponse } from '@vercel/node'

export default async function exit(_: NowRequest, res: NowResponse) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  // res.clearPreviewData() // where should this be coming from?

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end()
}
