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
    <li className="p-2" key={url}>
    <a href={url} target="_blank" rel="noopener noreferrer" className="rounded-xl">
      <Image
        src={avatar}
        alt={`Foto de perfil de ${name}`}
        className="rounded-3xl"
        width={300}
        height={300}
      />
      <br />
      <span>{name}</span>
    </a>
  </li>
  )
}
