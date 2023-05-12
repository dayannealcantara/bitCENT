import ServicosTransacao from "./financas/servicosTransacao"
import ServicosUsuario from "./usuario/ServicoUsuario"

class Servicos {
  get transacao() { return new ServicosTransacao() }
  get usuario() { return new ServicosUsuario() }
}

const servicos = new Servicos()
export default servicos