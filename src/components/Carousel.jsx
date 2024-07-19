
import { Carousel } from "flowbite-react";
export function Component() {
  return (
    <div className="sm:h-screen lg:h-[78vh]">
      <Carousel slide={false}>
        <section className="bg-comp3 bg-auto sm:h-screen lg:h-[78vh] justify-center flex items-center" id="subarea">
          <div className=" bg-negro h-[40rem] w-[80vw] align-center absolute ">
            <h1 className="text-8xl text-principal pt-24 ml-36">Programación</h1>
            <div className="flex">
                <p class="text-justify ml-36 pt-20 text-4xl">
                En el área de programación aprendemos sobre lógica y <br />
                análisis enfocado a la programación, también las <br />
                bases de lenguajes para el desarrollo de software <br />
                como Python, PHP o C#, además el manejo de bases de <br />
                datos como SQL por medio de herramientas como MySQL <br />
                y SQL Server. También conocimiento sobre sistemas <br />operativos.
                </p>
                <img src="/public/imgs/logocolor.png" className="rounded-full h-96 w-96 mt-[-2rem] ml-44" />
            </div>
          </div>
        </section>
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}
