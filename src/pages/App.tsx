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

        <div className="widthContainerMain"></div>

      </main>

      <footer>

        <div className="widthContainerFooter"></div>

      </footer>

    </div>

  )
}

export default App
