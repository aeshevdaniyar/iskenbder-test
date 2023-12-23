import { HomePage } from "@pages/HomePage";
import { Font } from "./Font";
import { Theme } from "./Theme";
import { Header } from "@widgets/Header";
import { Footer } from "@widgets/Footer";
function App() {
  return (
    <Theme>
      <Font>
        <Header />
        <HomePage />
        <Footer />
      </Font>
    </Theme>
  );
}

export default App;
