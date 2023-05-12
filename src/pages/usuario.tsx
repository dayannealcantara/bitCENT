
import Pagina from "@/components/template/Pagina";
import Header from "@/components/template/Header";
import TituloPagina from "@/components/template/TituloPagina";
import { IconForms } from "@tabler/icons-react";
import usuario from "@/data/constants/usuario";
import Conteudo from "@/components/template/Conteudo";
import Formularios from "@/components/usuario/Formularios";

export default function CadastroUsuario() {

  return (
    <Pagina>
      <Header/> 
        <Conteudo>
          <TituloPagina
          icone={<IconForms />}
          principal="Dados Cadastrais"
          secundario={`Informações de ${usuario.email}`}
          />  
          <Formularios/>
        </Conteudo>          
    </Pagina>
  )
}