import { IconBrandFacebook, IconBrandGithub,  IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
  return (
    <div className="flex">
      <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/dayanne-alcantara/" />
      <RedeSocial icone={<IconBrandTwitter />} url="https://twitter.com/DayanneAlcanta2" />
      <RedeSocial icone={<IconBrandGithub />} url="https://github.com/dayannealcantara" />
    </div>
  )
}