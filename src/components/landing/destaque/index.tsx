import CommonArea from "../comum/Area";
import ImagemResponsiva from "../comum/ImagemResponsiva";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg"

export default function Emphasis() {
  return (
     <CommonArea id="inicio" className="pt-20">
      <div className={`
        flex items-center justify-around
        h-[500px]
     `}>
        <Slogan/>  
        <ImagemResponsiva
          imagem={principal}
          className="rotate-3 hidden md:inline"
        />      
      </div>
     </CommonArea>
  )
}