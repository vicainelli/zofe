import { APPS } from 'lib/constants'
import Logo from 'components/Logo'

const Footer = () => (
  <footer className="grid place-items-center text-center pt-24 lg:pb-0 pb-20 gap-2.5">
    <div>
      <a href="https://discord.com/invite/ZQ6Cr3S6wy" target="_blank">Discord</a>
        {' '}&middot;{' '}
      <a href="https://twitter.com/zofepod" target="_blank">Twitter</a>
    </div>

    <ul className="p-4">
      {APPS.map(app => (
        <li key={app.url} className="inline-block mx-4">
          <a href={app.url} className="footer-feed-link" title={app.name}>
            {app.name}
          </a>
        </li>
      ))}
    </ul>
    <div className="pt-12 grid place-items-center gap-y-6">
      <Logo color="text-gray-400" />
      <p><sup role="img" aria-label="copyright">©</sup> 2012-{new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer
