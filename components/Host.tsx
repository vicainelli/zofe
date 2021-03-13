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
      className="grid place-items-center gap-2 rounded-xl"
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
