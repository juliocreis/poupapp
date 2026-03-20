import logo from "../../assets/logo.svg";

export function Aside() {
  return (
    <aside className="bg-neutral-header max-w-[282px] min-h-screen py-20 px-10 flex flex-col gap-[56px]" >
      <img src={logo} alt="Logo do Poupapp" />
      <p className="text-neutral-text text-center text-[13px] leading-[120%]">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
    </aside>
  );
}
