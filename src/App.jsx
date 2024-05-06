import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Adrian García</h1>

      <div className="accordion mt-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Tarjeta Virtual
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              ¡Acelera las transferencias! Copia y pega el número de tu tarjeta de forma rápida y precisa para una transacción sin complicaciones
              <br />
              <a href="https://card-adgar.netlify.app" target="_blank" rel="noopener noreferrer">👉 Tarjeta virtual</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Tracker de Peso
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Tracker de peso: historial de kilos, último dato y gráficas de medidas corporales.
              <br />
              <a href="https://healthy-progress.netlify.app" target="_blank" rel="noopener noreferrer">👉 Tracker de Peso</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Cotizador de Envios
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Envía medidas precisas por WhatsApp para cotizaciones de envíos más rápidas al vendedor.
              <br />
              <a href="https://vecinoenvios-cotizador.netlify.app" target="_blank" rel="noopener noreferrer">👉 Cotizador</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Mario Agustin - Website
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Artesanía de Michoacán: Tradición, Calidad y Belleza en el Sitio Web de Mario Agustín.
              <br />
              <a href="https://marioagustingaspar.netlify.app" target="_blank" rel="noopener noreferrer">👉 Website</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Catdog Profile
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Perfiles personalizados para el cuidado y seguimiento de tus compañeros peludos.
              <br />
              <a href="https://miloprofile.netlify.app" target="_blank" rel="noopener noreferrer">👉 Website</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              Fragmentum
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Fragmentum: Libro especializado con citas para parejas, con opción de compra vía WhatsApp del vendedor.
              <br />
              <a href="https://fragmentum.com.mx" target="_blank" rel="noopener noreferrer">👉 Website</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              Cotizador de Casa en Renta
            </button>
          </h2>
          <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Cotizador para alquiler de casa con múltiples opciones para el host.
              <br />
              <a href="https://cotizador-dimebruce.netlify.app" target="_blank" rel="noopener noreferrer">👉 Cotizador</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              Calculadora de Comision Tarjeta
            </button>
          </h2>
          <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Calculadora que determina el porcentaje de comisión por pago con tarjeta.
              <br />
              <a href="https://hummo-comisiones.netlify.app" target="_blank" rel="noopener noreferrer">👉 Calculadora</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
              Presupuesto para Gastos
            </button>
          </h2>
          <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Website que organiza y grafica tu presupuesto por categorías de gastos.
              <br />
              <a href="https://gastos-dimebruce.netlify.app" target="_blank" rel="noopener noreferrer">👉 Website</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
              Citas para Veterinaria
            </button>
          </h2>
          <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Agendador de Citas Veterinarias: Organiza fácilmente las citas para las necesidades de tus mascotas."
              <br />
              <a href="https://veterinaria-dimebruce-react.netlify.app" target="_blank" rel="noopener noreferrer">👉 Website</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
              Curso para Aprender React con JS
            </button>
          </h2>
          <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Guía de JavaScript para Principiantes: Aprende los fundamentos esenciales para comenzar con React.
              <br />
              <a href="https://fundamentos-js-para-react.netlify.app" target="_blank" rel="noopener noreferrer">👉 Guia</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
              Consumidor de una API
            </button>
          </h2>
          <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Ejemplo de Consumo de API: Descubre cómo acceder a los personajes de Rick y Morty mediante una API
              <br />
              <a href="https://rick-n-morty-vue.netlify.app" target="_blank" rel="noopener noreferrer">👉 Website</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-5 text-white-50">
        <p>Hecho con 🤍 por <a href="https://github.com/dimebruce" className="text-white" target="_blank">@dimebruce</a>
        </p>
      </footer>
    </>
  )
}

export default App
