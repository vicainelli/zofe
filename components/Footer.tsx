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
        <Link href="http://zofepod.libsyn.com/rss">
          <a className="footer-feed-link" title="Podcast RSS">
            Podcast RSS
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="https://itunes.apple.com/br/podcast/zone-of-front-enders-podcast/id580335548?mt=2&ls=1">
          <a className="footer-feed-link" target="_blank" rel="noopener noreferrer" title="Apple Podcast">
            Apple Podcast
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6MjAyODc2NDAvc291bmRzLnJzcw">
          <a className="footer-feed-link" target="_blank" rel="noopener noreferrer" title="Google Podcast">
            Google Podcast
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="https://pca.st/dMr0">
          <a className="footer-feed-link" target="_blank" rel="noopener noreferrer" title="Pocketcasts">
            Pocketcasts
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="https://overcast.fm/itunes580335548/zone-of-front-enders-podcast">
          <a className="footer-feed-link" target="_blank" rel="noopener noreferrer" title="Overcast">
            Overcast
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="http://www.stitcher.com/s?fid=250044&refid=stpr">
          <a className="footer-feed-link" target="_blank" rel="noopener noreferrer" title="Stitcher">
            Stitcher
          </a>
        </Link>
      </li>
      <li className="inline-block mx-4">
        <Link href="https://open.spotify.com/show/13Q4XtzJ1tSZ7trS4dSOf6?si=LOLsMSQFTcOLSG6a7VLPSw">
          <a className="footer-feed-link" target="_blank" rel="noopener noreferrer" title="Spotify">
            Spotify
          </a>
        </Link>
      </li>
    </ul>
    <p>© 2012-{new Date().getFullYear()} ZOFE</p>
  </footer>
)

export default Footer
