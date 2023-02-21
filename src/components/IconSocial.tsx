import { SocialIcon } from 'react-social-icons';

type Props = {
  url: string
}

export default function IconSocial({ url }: Props) {
  return (
    <SocialIcon
      url={url}
      fgColor="gray"
      bgColor="transparent"
    />
  )
}
