
import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import Conteudo from "../template/Conteudo";
import Header from "../template/Header";
import Pagina from "../template/Pagina";
import Lista from "./Lista";
import transacoesFalsas from "@/data/constants/transacoes";
import { useState } from "react";
import Formulario from "./Formularios";
import NaoEncontrado from "../template/NaoEncontrado";
import Id from "@/logic/core/comum/Id";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export default function Financas() {
  const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)
  const [transacao, setTransacao] = useState<Transacao | null>(null)

  function salvar (transacao:Transacao) {
    const outrasTransacoes = transacoes.filter(t => t.id !== transacao.id)    
    setTransacoes([...outrasTransacoes, {
      ...transacao,
      id: transacao.id ?? Id.novo()
    }])
    setTransacao(null)
  }

  function excluir(transacao:Transacao){
    const outrasTransacoes = transacoes.filter(t => t.id !== transacao.id)
    setTransacoes(outrasTransacoes)
    setTransacao(null)
  }

  return(
    <Pagina>
      <Header/>
        <Button
          className="bg-blue-500"
          leftIcon={<IconPlus />}
          onClick={() => setTransacao(transacaoVazia)}
          >Nova transação</Button>
      <Conteudo className="gap-5">
        {transacao ? (
          <Formulario
            transacao={transacao}
            cancelar={() => setTransacao(null)}
            salvar={salvar}
            excluir={excluir}
          />
        ) : transacoes.length > 0 ? (
          <Lista transacoes={transacoes} selecionarTransacao={setTransacao}/>
        ) : (
          <NaoEncontrado>
            Nenhuma transação encontrada
          </NaoEncontrado>
        )}    
      </Conteudo>
    </Pagina>
  ) 
}