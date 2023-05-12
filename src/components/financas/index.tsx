import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import Conteudo from "../template/Conteudo";
import Header from "../template/Header";
import Pagina from "../template/Pagina";
import Lista from "./Lista";
import Formulario from "./Formularios";
import NaoEncontrado from "../template/NaoEncontrado";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import useTransacao from "@/data/hooks/useTransacao";


export default function Financas() {
  const { data, alterarData, alterarExibicao, tipoExibicao,
  transacoes, transacao, selecionar, salvar, excluir
} = useTransacao()

  return(
    <Pagina>
      <Header/>
        <Button
          className="bg-blue-500"
          leftIcon={<IconPlus />}
          onClick={() => selecionar(transacaoVazia)}
          >Nova transação</Button>
      <Conteudo className="gap-5">
        {transacao ? (
          <Formulario
            transacao={transacao}
            cancelar={() => selecionar(null)}
            salvar={salvar}
            excluir={excluir}
          />
        ) : transacoes.length > 0 ? (
          <Lista transacoes={transacoes} selecionarTransacao={selecionar}/>
        ) : (
          <NaoEncontrado>
            Nenhuma transação encontrada
          </NaoEncontrado>
        )}    
      </Conteudo>
    </Pagina>
  ) 
}