export function Formater({ value }) {
  const formater = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return <>{formater.format(value)}</>;
}
