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
    title: 'Humilhação e desvalorização:',
    content: 'Insultos, xingamentos, apelidos depreciativos, críticas constantes, rebaixar a pessoa na frente de amigos ou familiares, desvalorizar suas opiniões, conquistas e sonhos.',
  },
  {
    id: '2',
    title: 'Ameaças e intimidação:',
    content: 'Ameaçar com gestos, olhares ou palavras; ameaçar de agressão física, de morte, de suicídio, de tirar os filhos ou de prejudicar pessoas queridas pela vítima.',
  },
  {
    id: '3',
    title: 'Controle e isolamento:',
    content: 'Controlar as amizades, as roupas, o dinheiro e os horários; proibir de estudar, trabalhar ou de ver a família; controlar o celular e as redes sociais; impedir a pessoa de ir e vir.',
  },
   {
    id: '4',
    title: 'Manipulação e chantagem emocional:',
    content: 'Distorcer fatos para culpar a vítima, usar os filhos para fazer chantagem, dar "tratamento de silêncio", fazer a pessoa se sentir culpada por coisas que não fez, ameaçar terminar o relacionamento para conseguir o que quer.',
  },
  {
    id: '5',
    title: 'Vigilância e perseguição:',
    content: 'Espionar o celular e e-mails, seguir a pessoa, aparecer de surpresa no trabalho ou em outros locais, instalar programas ou rastreadores para monitorar o que a pessoa faz, diz ou para onde vai.',
  },

   {
    id: '6',
    title: 'Distorção da realidade (Gaslighting):',
    content: 'Fazer a pessoa duvidar da própria memória e sanidade, negar fatos que aconteceram, dizer frases como "você está louca(o)" ou "isso nunca aconteceu", esconder objetos para confundir a vítima.',
  },


];


function AcordeaoAbusos2() {
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

export default AcordeaoAbusos2;