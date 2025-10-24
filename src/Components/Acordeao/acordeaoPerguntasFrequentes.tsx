import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';


const accordionData = [
  {
    id: '1',
    title: 'Qual a diferença entre tristeza e depressão?',
    content: 'A tristeza é uma emoção normal, que todos sentimos em algum momento (como após uma perda, decepção ou situação difícil). Tem causa identificável e tende a diminuir com o tempo. Mesmo triste, a pessoa ainda consegue sentir prazer em algumas atividades e manter sua rotina. Já a depressão é um transtorno mental que afeta profundamente o humor, o pensamento e o comportamento.  Dura semanas ou meses, podendo piorar se não for tratada. A pessoa perde o interesse em coisas que antes gostava, sente falta de energia, culpa excessiva, desesperança e pode ter alterações no sono, apetite e até pensamentos suicidas.'
  },
  {
    id: '2',
    title: 'Como a terapia ajuda no tratamento da ansiedade?',
    content: 'A terapia ajuda na ansiedade porque ensina a entender os gatilhos, controlar os pensamentos e usar técnicas para acalmar a mente, promovendo equilíbrio e bem-estar. A terapia não elimina a ansiedade de forma mágica, mas ensina a pessoa a lidar com ela de modo saudável, diminuindo o sofrimento e melhorando a qualidade de vida.',
  },
  {
    id: '3',
    title: 'O TDAH é um problema de comportamento ou uma condição neurológica?',
    content: 'O TDAH é uma condição neurológica, não um simples problema de comportamento. Ele afeta áreas do cérebro ligadas à atenção, impulsividade e controle das ações, podendo influenciar o comportamento — mas sua origem é biológica, não falta de disciplina.',
  },
   {
    id: '4',
    title: 'Como abordar alguém que está pensando em suicídio?',
    content: 'Aborde com calma, empatia e sem julgamentos. Mostre que você se importa, ouça com atenção e leve a pessoa a buscar ajuda profissional. Evite frases como “isso é frescura” ou “pense positivo” — em vez disso, diga: “Você não está sozinho, quero te ajudar.” Se houver risco imediato, procure ajuda no 188 (CVV) ou leve a pessoa a um hospital. ',
  },
  {
    id: '5',
    title: 'É possível ter uma vida normal com esquizofrenia?',
    content: 'SIM. Com tratamento adequado, acompanhamento médico e apoio familiar, muitas pessoas com esquizofrenia conseguem estudar, trabalhar e ter uma vida equilibrada. O diagnóstico não define quem a pessoa é — com cuidado e estabilidade, é possível viver bem.',
  },

];


function AcordeaoPerguntasFrequentes() {
  const [open, setOpen] = useState('');

  const toggle = (id: string) => {
    setOpen(open === id ? '' : id);
  };

  return (
    
    
    <Accordion open={open} toggle={toggle} flush> {/* flush é para remover as bordas */}
      {accordionData.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader targetId={item.id}>
            {item.title}
          </AccordionHeader>
          <AccordionBody accordionId={item.id}>
            {item.content}
          </AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AcordeaoPerguntasFrequentes;