import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/layout'
import { SITE_NAME } from 'lib/constants'

const Assine = ({ preview }) => (
  <Layout preview={preview}>
    <div>
      <Head>
        <title>Assine - {SITE_NAME}</title>
      </Head>

      <h2>Assine o Podcast</h2>
      <ul>
        <li>
          <Link href="https://zofe.com.br/feed/podcast.xml">
            <a className="footer-feed-link" title="Podcast RSS">
              Podcast RSS
            </a>
          </Link>
        </li>
        <li>
          <Link href="itpc://zofe.com.br/feed/podcast.xml">
            <a className="footer-feed-link" title="Apple Podcast">
              Apple Podcast
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.google.com/podcasts?feed=aHR0cHM6Ly96b2ZlLmNvbS5ici9mZWVkL3BvZGNhc3QueG1s">
            <a className="footer-feed-link" title="Google Podcast">
              Google Podcast
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://pca.st/dMr0">
            <a className="footer-feed-link" title="Pocketcasts">
              Pocketcasts
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://overcast.fm/itunes580335548/zone-of-front-enders-podcast">
            <a className="footer-feed-link" title="Overcast">
              Overcast
            </a>
          </Link>
        </li>
        <li>
          <Link href="http://www.stitcher.com/s?fid=250044&refid=stpr">
            <a className="footer-feed-link" title="Stitcher">
              Stitcher
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://open.spotify.com/show/13Q4XtzJ1tSZ7trS4dSOf6?si=LOLsMSQFTcOLSG6a7VLPSw">
            <a className="footer-feed-link" title="Spotify">
              Spotify
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default Assine
