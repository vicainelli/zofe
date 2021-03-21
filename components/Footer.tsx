import { APPS } from 'lib/constants'
import Logo from 'components/Logo'

export default function Footer() {
  return (
    <footer className="grid place-items-center text-center pt-24 lg:pb-0 pb-20 gap-2.5">
      <ul className="flex content-around mb-5">
        <li>
          <a href="https://discord.com/invite/ZQ6Cr3S6wy" target="_blank">Discord</a>
          {' '}&middot;{' '}
        </li>
        <li>
          <a href="https://twitter.com/zofepod" target="_blank">Twitter</a>
        </li>
      </ul>

      <ul className="lg:p-4">
        {APPS.map(app => (
          <li key={app.url} className="inline-block mx-4 my-2 lg:my-0">
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
}
