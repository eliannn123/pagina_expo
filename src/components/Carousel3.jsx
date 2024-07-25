
import { Carousel } from "flowbite-react";
export function Componente() {
  return (
    <div className="h-screen xl:h-[78vh] ">
      <Carousel slide={false}>
        <section  className="bg-[url('/public/imgs/cuadross.jpeg')] bg-cover xl:bg-contain h-screen xl:h-[78vh] justify-center flex items-center" id="web">
            <div className=" bg-comp3  h-[70vh] xl:h-[40rem] w-[80vw] align-center ">
              <h1 className="md:text-8xl  text-6xl  max-[340px]:text-4xl  max-md:text-center text-principal 2xl:pt-24 pt-10 xl:pt-10 md:ml-28 ml-4 lg:ml-52 xl:ml-36">Diseño Web</h1>
              <div className="flex">
                  <p class="xl:text-justify  text-center ml-2 max-[340px]:text-2xl xl:ml-36 lg:ml-16 2xl:pt-20 xl:pt-8 pt-8  md:text-4xl text-3xl xl:w-[40vw] w-[77vw] md:w-[80vh] md:h-[20vh]">
                  Esta subárea se especializa en la creación y mejora de 
                  sitios web utilizando herramientas fundamentales 
                  como HTML, CSS y JavaScript, junto con plataformas 
                  populares como Wix y Wordpress. Se centra en el 
                  diseño y desarrollo de interfaces web efectivas y funcionales.
                  </p>
                  <img src="/public/imgs/disweb.jpg" className="rounded-full h-96 w-96 mt-[-2rem] 2xl:ml-44 xl:ml-10 hidden xl:flex" />
              </div>
            </div>
          </section>
          <section className="bg-[#FCECDD] bg-contain xl:bg-contain h-screen xl:h-[78vh] justify-center flex items-center" id="emp">
          <div className=" bg-negro h-[70vh] xl:h-[40rem] w-[80vw] align-center  ">
            <h1 className="2xl:text-8xl md:text-7xl max-[400px]:text-3xl   text-5xl text-principal  2xl:pt-24 pt-10  min-[430px]:ml-[0.5rem] ml-8 md:ml-[4rem] 2xl:ml-[50rem] xl:ml-[39rem] lg:ml-44 max-[340px]:ml-[1rem]">Emprendedurismo</h1>
            <div className="flex">
                <img src="/public/imgs/emp.jpeg" className="rounded-full hidden  xl:flex max-xl:translate-x-40 max-xl:pt-4 xl:mt-[-2rem] translate-x-32 h-72 w-72 xl:h-96 xl:w-96" />
                <p class="xl:ml-36 lg:ml-4 2xl:ml-96 ml-2  xl:pt-14 pt-20 2xl:pt-20 md:text-4xl  max-[400px]:text-xl text-2xl xl:text-right  text-center 2xl:w-[35vw] xl:w-[40vw] w-[77vw] md:w-[80v2] md:h-[20vh]">
                Esta subárea se especializa en la creación y mejora de 
                sitios web utilizando herramientas fundamentales 
                como HTML, CSS y JavaScript, junto con plataformas 
                populares como Wix y Wordpress. Se centra en el
                diseño y desarrollo de interfaces web efectivas y funcionales.
                </p>
            </div>
          </div>
        </section>
        <section className="bg-[url('/public/imgs/patron3.jpg')] bg-cover xl:bg-contain h-screen xl:h-[78vh] justify-center flex items-center">
          <div className=" bg-negro  h-[70vh] xl:h-[40rem] w-[80vw] align-center ">
          <h1 class="md:text-8xl  text-5xl max-[400px]:text-4xl max-xl:text-center text-principal 2xl:pt-24 pt-10 xl:pt-10 md:ml-3 ml-2 min-[430px]:ml-4 xl:ml-36">English for communication</h1>
            <div className="flex">
                <p className="xl:text-justify  text-center ml-2 xl:ml-36 lg:ml-20 2xl:pt-20 xl:pt-14 pt-8  md:text-4xl text-2xl min-[430px]:text-3xl xl:w-[40vw] w-[77vw] md:w-[80vh] md:h-[20vh]">
                El estudio del inglés es crucial tanto en el ámbito 
                profesional como académico. En esta disciplinab,además de enfocarnos en el dominio general del 
                idioma, también nos especializamos en inglés técnico para potenciar nuestras habilidades lingüísticas en  
                contextos específicos y profesionales.
                </p>
                <img src="/public/imgs/ingles.jpg" className="rounded-full h-96 w-96 mt-[1rem] 2xl:mt-[-1rem] 2xl:ml-44 xl:ml-10 hidden xl:flex" />
            </div>
          </div>
        </section>
      </Carousel>
    </div>
  );
}
