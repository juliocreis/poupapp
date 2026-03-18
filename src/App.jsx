import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput type="text" placeholder="Procure seu dinheiro..." name="q"/>
          <div className="flex flex-col gap-2">
            <Typography variant='h1'>Olá, Júlio!</Typography>
            <Typography variant='p'>Veja como estão suas finanças hoje.</Typography>
          </div>
        </Main>
      </Container>
    </div>
  );
}

export default App;
