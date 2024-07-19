
import { Carousel } from "flowbite-react";
export function Componente() {
  return (
    <div className="sm:h-screen lg:h-[78vh]">
      <Carousel slide={true}>
        <section  className="bg-[url('/public/imgs/cuadross.jpeg')] bg-contain sm:h-screen lg:h-[78vh] justify-center flex items-center" id="web">
            <div className=" bg-comp3 h-[40rem] w-[80vw] align-center absolute ">
              <h1 className="text-8xl text-principal pt-24 ml-36">Diseño Web</h1>
              <div className="flex">
                  <p class="text-justify ml-36 pt-20 text-4xl">
                  Esta subárea se especializa en la creación y mejora de <br />
                  sitios web utilizando herramientas fundamentales <br />
                  como HTML, CSS y JavaScript, junto con plataformas <br />
                  populares como Wix y Wordpress. Se centra en el <br />
                  diseño y desarrollo de interfaces web efectivas y <br /> funcionales.
                  </p>
                  <img src="/public/imgs/disweb.jpg" className="rounded-full h-96 w-96 mt-[-2rem] ml-44" />
              </div>
            </div>
          </section>
          <section className="bg-[#FCECDD] bg-contain sm:h-screen lg:h-[78vh] justify-center flex items-center" id="emp">
          <div className=" bg-negro h-[40rem] w-[80vw] text-center absolute ">
            <h1 className="text-8xl text-principal pt-32 text-right mr-28">Emprendedurismo</h1>
            <div className="flex">
                <img src="/public/imgs/ingles.jpg" className="rounded-full h-96 w-96 mt-[-4rem] translate-x-32" />
                <p class="text-right ml-[19rem] pt-20 text-4xl">
                Esta subárea se especializa en la creación y mejora de <br />
                sitios web utilizando herramientas fundamentales <br />
                como HTML, CSS y JavaScript, junto con plataformas <br />
                populares como Wix y Wordpress. Se centra en el <br />
                diseño y desarrollo de interfaces web efectivas y <br />funcionales.
                </p>
            </div>
          </div>
        </section>
        <section className="bg-[url('/public/imgs/patron3.jpg')] bg-contain sm:h-screen lg:h-[78vh] justify-center flex items-center">
          <div className=" bg-negro h-[40rem] w-[80vw] absolute ">
          <h1 class="text-8xl text-principal pt-24 ml-36">English for communication</h1>
            <div className="flex">
                <p className="text-justify ml-36 pt-20 text-4xl">
                El estudio del inglés es crucial tanto en el ámbito <br />
                profesional como académico. En esta disciplinab, <br />además de enfocarnos en el dominio general del 
                <br />idioma, también nos especializamos en inglés técnico <br />para potenciar nuestras habilidades lingüísticas en  
                <br />contextos específicos y profesionales.
                </p>
                <img src="/public/imgs/ingles.jpg" className="rounded-full h-96 w-96 mt-[-1rem] ml-44" />
            </div>
          </div>
        </section>
      </Carousel>
    </div>
  );
}
