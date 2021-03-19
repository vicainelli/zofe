import Image from 'next/image'

type HostProps = {
  url: string
  name: string
  avatar: string
}

export default function Host ({
  name,
  url,
  avatar
}: HostProps) {

  return (
    <li
      key={url}
      className="grid lg:gap-2 lg:grid-cols-none grid-cols-2 place-items-center"
    >
      <Image
        src={avatar}
        alt={`Foto de perfil de ${name}`}
        className="rounded-3xl"
        width={300}
        height={300}
      />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </li>
  )
}
