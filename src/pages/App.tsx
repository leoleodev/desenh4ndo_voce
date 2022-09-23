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
        
        <div className="widthContainerMain sectionMovie"></div>
        <div className="widthContainerMain"></div>
        <div className="widthContainerMain sectioTestimonial"></div>

      </main>

      <footer>

        <div className="widthContainerFooter"></div>

      </footer>

    </div>

  )
}

export default App
