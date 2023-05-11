import usuario from "@/data/constants/usuario"

export default function BoasVindas() {
  function renderizarNome() {
    return (
      <span className="hidden sm:inline">
       {usuario?.nome.split('')}
      </span>
    )
  }
  return (
      <div className={`text-3xl font-black`}>
          Olá {renderizarNome()} 👋
      </div>
  )
}