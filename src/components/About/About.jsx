import React from 'react'

const About = () => {
  return (
    <div className="container grid grid-cols-12 mx-auto">
      <div className="col-span-12 md:col-span-8">
        <h3 className="p-10 font-normal text-xl">
          <strong>GEET</strong> es una marca global de moda para hombre, que
          incluye ropa, accesorios y zapatos. La marca nació en Santiago de
          Chile hace más de un año, es conocida por ofrecer una completa
          selección de ropa de moda y vanguardia a precios atractivos. Contamos
          con una plataforma de e-commerce que está en constante crecimiento.
        </h3>
      </div>
      <div className="col-span-12 md:col-span-4 about__sideImage"></div>
    </div>
  );
}

export default About;
