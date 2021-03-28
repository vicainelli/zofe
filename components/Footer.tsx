import { APPS } from 'lib/constants'

export default function Footer() {
  return (
    <footer className="grid place-items-center text-center pt-24 lg:pb-40 gap-2.5">
      <ul className="flex content-around mb-5">
        <li className="px-2">
          <a href="https://discord.com/invite/ZQ6Cr3S6wy" target="_blank">Discord</a>
        </li>
        <li className="px-2">
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
        <p>Copyright <span role="img" aria-label="copyright">©</span> ZOFE 2012-{new Date().getFullYear()} - Todos os Direitos Reservados</p>
      </div>
    </footer>
  )
}
