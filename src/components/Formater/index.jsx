const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function Formater({ value }) {

  return <>{formater.format(value)}</>;
}
