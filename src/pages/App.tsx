import { HeaderBar } from "../components/HeaderBar"
import { HeaderMain } from "../components/HeaderMain"

function App() {

  return (

    <div>

      <header>

        <div className="widthContainerHeader">
          <HeaderBar />
          <HeaderMain />
        </div>

      </header>

      <main>

        <div className="widthContainer"></div>

      </main>

      <footer>

        <div className="widthContainer"></div>

      </footer>

    </div>

  )
}

export default App
