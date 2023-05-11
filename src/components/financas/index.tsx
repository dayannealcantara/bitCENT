
import Transacao from "@/logic/core/financas/Transacao";
import Conteudo from "../template/Conteudo";
import Header from "../template/Header";
import Pagina from "../template/Pagina";
import Lista from "./Lista";
import transacoesFalsas from "@/data/constants/transacoes";
import { useState } from "react";

export default function Financas() {
  const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)
  return(
  <Pagina>
    <Header/>
    <Conteudo>
      <Lista transacoes={transacoes}/>
    </Conteudo>
  </Pagina>
  ) 
}