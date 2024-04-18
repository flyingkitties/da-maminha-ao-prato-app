import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <div className="bg-primary px-5 md:px-[5%] xl:px-[10%]">
      <div className="py-10">
        <h1 className="text-center titleFont text-terciary text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Sobre Da Maminha ao Prato
        </h1>
        <div className="grid md:grid-cols-2 gap-5 my-10">
          {/* <Image
            src={about}
            alt="profile image"
            className=""
          /> */}
          <div className="p-TextFormat space-y-5">
            <p>
              O meu nome é Ana van der Kellen, sou nutricionista-materno
              infantil especialista em amamentação.
            </p>
            <p>
              A minha paixão pela nutrição começou bem cedo, quando era ainda
              adolescente, com o nascimento da minha primeira filha encontrei
              uma nova paixão a amamentação.
            </p>
            <p>
              Especializei-me na área infantil e realizei formação também na
              área da amamentação e hoje ajudo mães como tu nos primeiros passos
              da maternidade desde a preparação para a amamentação na gravidez,
              passando pelas dificuldades na amamentação no pós-parto,
              introdução alimentar infantil, amamentação no regresso ao trabalho
              e até ao desmame.
            </p>
            <p className="hidden lg:inline-block">
              A minha abordagem é centrada na mãe e no bebé, com foco na
              importância da alimentação saudável durante a gravidez, lactação e
              infância. Promovo a amamentação exclusiva nos primeiros meses de
              vida do bebê, fornecendo orientações personalizadas e apoio para
              superar desafios. Acredito em introduzir alimentos sólidos de
              forma gradual e incentivar escolhas alimentares saudáveis desde
              cedo, estabelecendo bases duradouras para uma vida inteira de
              hábitos saudáveis.
            </p>
          </div>
        </div>
        {/* text */}
        <div className="p-TextFormat space-y-5 lg:hidden">
          <p>
            A minha abordagem é centrada na mãe e no bebé, com foco na
            importância da alimentação saudável durante a gravidez, lactação e
            infância. Promovo a amamentação exclusiva nos primeiros meses de
            vida do bebê, fornecendo orientações personalizadas e apoio para
            superar desafios. Acredito em introduzir alimentos sólidos de forma
            gradual e incentivar escolhas alimentares saudáveis desde cedo,
            estabelecendo bases duradouras para uma vida inteira de hábitos
            saudáveis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
