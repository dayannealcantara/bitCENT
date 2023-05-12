import  { transacaoVazia } from "@/logic/core/financas/Transacao";
import Conteudo from "../template/Conteudo";
import Header from "../template/Header";
import Pagina from "../template/Pagina";
import Lista from "./Lista";
import Formulario from "./Formularios";
import NaoEncontrado from "../template/NaoEncontrado";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import CampoMesAno from "../template/CampoMesAno";
import Grade from "./Grade";


export default function Financas() {
  const { data, alterarData, alterarExibicao, tipoExibicao,
  transacoes, transacao, selecionar, salvar, excluir
} = useTransacao()

function renderizarControles() {
  return (
    <div className="flex justify-between">
      <CampoMesAno
        data={data}
        dataMudou={alterarData}
      />
        <div className="flex gap-5">
          <Button
            className="bg-blue-500"
            leftIcon={<IconPlus />}
            onClick={() => selecionar(transacaoVazia)}
          >Nova transação</Button>
            <SegmentedControl
              data={[
                { label: <IconList />, value: 'lista' },
                { label: <IconLayoutGrid />, value: 'grade' }
              ]}
              onChange={tipo => alterarExibicao(tipo as TipoExibicao)}
            />
        </div>
    </div>
  ) 
}

  function renderizarTransacoes() {
    const props = { transacoes, selecionarTransacao: selecionar }
      return tipoExibicao === 'lista' 
        ? <Lista {...props} />
        : <Grade {...props} />
  }

  return(
    <Pagina>
      <Header/>      
      <Conteudo className="gap-5">
      {renderizarControles()}
        {transacao ? (
          <Formulario
            transacao={transacao}
            cancelar={() => selecionar(null)}
            salvar={salvar}
            excluir={excluir}
          />
        ) : transacoes.length > 0 ? (
          renderizarTransacoes()
        ) : (
          <NaoEncontrado>
            Nenhuma transação encontrada
          </NaoEncontrado>
        )}    
      </Conteudo>
    </Pagina>
  ) 
}