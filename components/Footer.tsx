import Link from 'next/link'

const Footer = () => (
  <footer>
    <p>
      <Link href="https://discord.com/invite/ZQ6Cr3S6wy">
        <a target="_blank">Discord</a>
      </Link>{' '}
      &middot;{' '}
      <Link href="https://twitter.com/zofepod">
        <a target="_blank">Twitter</a>
      </Link>
    </p>
    <p>© 2012-{new Date().getFullYear()} ZOFE</p>
  </footer>
)

export default Footer
