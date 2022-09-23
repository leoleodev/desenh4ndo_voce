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
        
        <section className="section1">
          <div className="widthContainerMain1">
            
          </div>
        </section>

        <section className="widthContainerMain"></section>

        <section className="section2">
          <div className="widthContainerMain">

          </div>
        </section>

      </main>

      <footer>

        <div className="widthContainerFooter"></div>

      </footer>

    </div>

  )
}

export default App
