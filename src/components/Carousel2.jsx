
import { Carousel } from "flowbite-react";
export function Componentt() {
  return (
    <div className="sm:h-screen lg:h-[78vh]">
      <Carousel slide={false}>
        <section className="bg-[url('/public/imgs/flowerss.jpeg')] bg-contain sm:h-screen lg:h-[78vh] justify-center flex items-center" id="subarea">
          <div className=" bg-negro h-[40rem] w-[80vw] text-center absolute ">
            <h1 className="text-8xl text-principal pt-32 text-right mr-48">Técnicas</h1>
            <div className="flex">
                <img src="/public/imgs/ingles.jpg" className="rounded-full h-96 w-96 mt-[-4rem] translate-x-32" />
                <p class="text-right ml-64 pt-20 text-4xl">
                En técnicas de diseño, utilizamos nuestra creatividad <br />
                para idear una variedad de diseños. Esto implica tanto<br /> 
                el desarrollo manual de conceptos como el uso de <br /> herramientas digitales como Photoshop e Illustrator <br />
                para crear.
                </p>
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
