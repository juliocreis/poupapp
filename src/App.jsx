import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";

import Card from "./components/Cards";
import { Formater } from "./components/Formater";
import { DailyBudget } from "./components/DailyBudget";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput
            type="text"
            placeholder="Procure seu dinheiro..."
            name="q"
          />
          <div className="flex flex-col gap-2">
            <Typography variant="h1">Olá, Júlio!</Typography>
            <Typography variant="p">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>

          <section className="grid grid-cols-2 gap-6">
            <Card>
              <Card.Header>
                Orçamento diário disponível:
              </Card.Header>
              <Card.Body>
                <DailyBudget value='200'></DailyBudget>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                Progresso da meta financeira
              </Card.Header>
              <Card.Body>
                
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                Movimentação financeira
              </Card.Header>
              <Card.Body>
                200,00
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                Minhas contas
              </Card.Header>
              <Card.Body>
                
              </Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
