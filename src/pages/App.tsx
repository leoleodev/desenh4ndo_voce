import { DepositionsSection } from "../components/DepositionsSection"
import { FormSection } from "../components/FromSection"
import { HeaderBar } from "../components/HeaderBar"
import { HeaderMain } from "../components/HeaderMain"
import { MovieSection } from "../components/MovieSection"
import { ServicesSection } from "../components/ServicesSection"

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
            <MovieSection />
          </div>
        </section>

        <section className="section2">
          <ServicesSection />
          <FormSection />
        </section>

        <section className="section3">
          <div className="widthContainerMain3">
            <DepositionsSection />
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
