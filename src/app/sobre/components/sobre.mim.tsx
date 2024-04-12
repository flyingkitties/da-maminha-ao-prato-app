import Image from 'next/image';
import React from 'react';
import about2 from '@/../public/image-about-2.png';

function AboutMe() {
  return (
    <div className="bg-primary px-5 md:px-[5%] xl:px-[10%]">
      <div className="py-10">
        <h2 className="text-center titleFont text-terciary text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          O que podes esperar de mim
        </h2>
        <div className="grid md:grid-cols-2 gap-5 my-10">
          <div className="p-TextFormat space-y-5">
            <p>
              No meu trabalho como profissional de nutrição materno-infantil e
              apoio à amamentação, adoto uma abordagem centrada na mãe e no
              bebé, baseada no princípio fundamental de que uma nutrição
              adequada desde a gestação até a infância é essencial para o
              desenvolvimento saudável e o bem-estar de ambos.
            </p>
            <p>
              Após o nascimento, defendo a promoção da amamentação exclusiva nos
              primeiros meses de vida do bebê. A amamentação não só fornece
              todos os nutrientes essenciais que o bebé precisa, mas também
              oferece benefícios imunológicos e emocionais inigualáveis. O meu
              papel é apoiar as mães durante este período, oferecendo
              orientações práticas e encorajamento para superar quaisquer
              desafios que possam surgir, garantindo assim uma experiência
              positiva de amamentação.
            </p>
            <p>
              Além disso, minha filosofia de trabalho inclui o reconhecimento da
              importância da introdução gradual de alimentos sólidos na dieta do
              bebê, respeitando seu desenvolvimento e preferências individuais.
              Promovo uma abordagem baseada em alimentos integrais e nutritivos,
              incentivando escolhas alimentares saudáveis desde a infância, que
              estabeleçam bases sólidas para uma vida inteira de hábitos
              alimentares saudáveis.
            </p>
          </div>
          <Image
            src={about2}
            alt="profile image"
            className=""
          />
        </div>
        <div className="p-TextFormat space-y-5">
          <p>
            Em resumo, minha abordagem é guiada pelo compromisso de capacitar e
            apoiar mães e bebés na sua jornada de nutrição e desenvolvimento,
            oferecendo orientações personalizadas, baseadas em evidências e
            centradas nas necessidades únicas de cada família.
          </p>
          <p>
            Comigo podes ter este apoio constante e que tantas vezes se
            completa, vou ajudar-te em qualquer desafio relacionado com a
            amamentação e alimentação infantil, vou dar-te a mão e apoiar-te nos
            teus primeiros passos como mãe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
