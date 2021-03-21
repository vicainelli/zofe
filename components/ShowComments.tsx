import { SiDisqus as Disqus } from 'react-icons/si'
import { IoMdAlert as Alert } from 'react-icons/io'
import { AiOutlineLoading3Quarters as Loader } from 'react-icons/ai'

type ShowCommentsProps = {
  clickHandler: () => void
}

const wrapperStyles = 'grid place-items-center m-auto mt-24'

export function DisqusLoader() {
  return (
    <div className={wrapperStyles}>
      <Loader className="text-3xl text-zofe animate-spin" />
    </div>
  )
}

export default function ShowComments ({
  clickHandler
}: ShowCommentsProps) {

  return (
    <div className={wrapperStyles}>
      <button
        className="grid place-items-center bg-opacity-40 border-solid border-2 border-gray-700 rounded-2xl py-2 px-12"
        onClick={clickHandler}
      >
        <Disqus aria-hidden className="text-5xl mt-2 mb-5" />
        Mostrar comentários
      </button>
      <p className="mt-12 text-center"><Alert className="inline relative -inset-y-0.5 text-red-300 animate-pulse" aria-hidden /> Ao carregar os comentários via Disqus, os cookies que eles injetam serão inseridos</p>
    </div>
  )
}