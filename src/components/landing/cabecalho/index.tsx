import CommonArea from "../comum/Area";
import Logo from "../comum/Logo";
import Menu from "./Menu";

export default function Cabecalho() {
  return (    
    <CommonArea className="bg-black fixed z-50">
      <div className="flex items-center justify-between h-20">
        <Logo /> 
        <Menu/>     
      </div>
    </CommonArea>
  )
}


 