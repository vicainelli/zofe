import Head from 'next/head'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_HANDLER, SITE_THEME_COLOR } from 'lib/constants'
import { useRouter } from 'next/router'

export type SEOProps = Partial<{
  title: string
  path: string
  pitch: string
  keywords: string[]
  ogOverride: string
}>

const ROOT_OG_IMAGE = `${SITE_URL}/zofe-og.png`

const getPageUrl = (path?: string) =>
  Boolean(path)
    ? `${SITE_URL}/${path}`
    : SITE_URL

const getOGimage = (title: string, path: string, keywords?: string[]) => {
  // @TODO: create lambda for OG per episode
  return ROOT_OG_IMAGE
  // if (path === '') {
  //   return ROOT_OG_IMAGE
  // }

  // if (Array.isArray(keywords)) {
  //   return `https://og.atila.io/api?title=${title}&keywords=${JSON.stringify(
  //     keywords
  //   )}`
  // }

  // return `https://og.atila.io/api?title=${title}`
}

export default function SEO({
  title = '',
  path = '',
  pitch,
  keywords = SITE_KEYWORDS,
  ogOverride,
}: SEOProps) {
  const { pathname } = useRouter()
  const pageTitle = title ? `${title} - ${SITE_NAME}` : `${SITE_NAME} - Desenvolviment web`
  const pageDescription = pitch || SITE_DESCRIPTION
  const ogImage = ogOverride
    ? ogOverride
    : pathname === '/'
    ? ROOT_OG_IMAGE
    : getOGimage(title, path, keywords)

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="canonical" href={getPageUrl(path)} />
      <meta name={`description`} content={pageDescription} />
      <meta
        name="viewport"
        content="width=device-width"
        key="viewport"
      />
      <meta property={`og:title`} content={pageTitle} />
      <meta property={`og:description`} content={pageDescription} />
      <meta property={`og:url`} content={getPageUrl(path)} />
      <meta property={`og:image`} content={ogImage} />
      <meta property={`og:type`} content={`website`} />
      <meta name={`twitter:card`} content={`summary_large_image`} />
      <meta
        name={`twitter:image`}
        content={getOGimage(title, path, keywords)}
      />
      <meta name={`twitter:creator`} content={SITE_HANDLER} />
      <meta property={`twitter:image`} content={ogImage} />
      <meta name={`twitter:site`} content={SITE_HANDLER} />
      <meta name={`twitter:title`} content={pageTitle} />
      <meta name={`twitter:description`} content={pageDescription} />
      <meta name={`keywords`} content={keywords.join(`, `)} />
      <meta name={'theme-color'} content={SITE_THEME_COLOR} />
    </Head>
  )
}