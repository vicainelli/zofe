import Image from 'next/image'

type HostProps = {
  url: string
  name: string
  avatar: string
  invert?: boolean
}

export default function Host ({
  name,
  url,
  avatar,
  invert
}: HostProps) {

  return (
    <li
      key={url}
      className="grid lg:gap-2 lg:grid-cols-none grid-cols-2 place-items-center"
    >
      <Image
        src={avatar}
        alt={`Foto de perfil de ${name}`}
        className="rounded-full"
        width={300}
        height={300}
      />
      <a href={url} target="_blank" rel="noopener noreferrer" className={`${invert && 'row-start-1 lg:row-start-2'} md:text-3xl lg:text-xl`}>
        {name}
      </a>
    </li>
  )
}
