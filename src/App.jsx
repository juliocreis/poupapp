import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { SearchInput } from "./components/SearchInput";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <SearchInput type="text" placeholder="Procure seu dinheiro..."/>
      </Container>
    </div>
  );
}

export default App;
