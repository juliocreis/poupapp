import "./App.css";
import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";

function App() {
  return (
    <>
      <Container>
        <Aside />
        <Main>
          <SearchInput
            type="text"
            name="searchMoney"
            placeholder="Procure seu dinheiro..."
          ></SearchInput>
        </Main>
      </Container>
    </>
  );
}

export default App;
