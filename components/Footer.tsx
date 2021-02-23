import Link from 'next/link'

const Footer = () => (
  <footer className="text-center">
    <div>
      <Link href="https://discord.com/invite/ZQ6Cr3S6wy">
        <a target="_blank">Discord</a>
      </Link>{' '}
      &middot;{' '}
      <Link href="https://twitter.com/zofepod">
        <a target="_blank">Twitter</a>
      </Link>
    </div>

    <ul className="p-4">
      <li className="inline-block mx-4">
        <Link href="https://zofe.com.br/feed/podcast.xml">
          <a className="footer-feed-link" title="Podcast RSS">
            Podcast RSS
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="itpc://zofe.com.br/feed/podcast.xml">
          <a className="footer-feed-link" title="Apple Podcast">
            Apple Podcast
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="https://www.google.com/podcasts?feed=aHR0cHM6Ly96b2ZlLmNvbS5ici9mZWVkL3BvZGNhc3QueG1s">
          <a className="footer-feed-link" title="Google Podcast">
            Google Podcast
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="https://pca.st/dMr0">
          <a className="footer-feed-link" title="Pocketcasts">
            Pocketcasts
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="https://overcast.fm/itunes580335548/zone-of-front-enders-podcast">
          <a className="footer-feed-link" title="Overcast">
            Overcast
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="http://www.stitcher.com/s?fid=250044&refid=stpr">
          <a className="footer-feed-link" title="Stitcher">
            Stitcher
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="https://open.spotify.com/show/13Q4XtzJ1tSZ7trS4dSOf6?si=LOLsMSQFTcOLSG6a7VLPSw">
          <a className="footer-feed-link" title="Spotify">
            Spotify
          </a>
        </Link>
      </li>
    </ul>
    <p>© 2012-{new Date().getFullYear()} ZOFE</p>
  </footer>
)

export default Footer
