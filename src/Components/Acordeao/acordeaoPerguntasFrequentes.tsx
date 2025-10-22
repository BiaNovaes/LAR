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
    title: 'Pergunta 1',
    content: '??????????????',
  },
  {
    id: '2',
    title: 'Pergunta 2',
    content: '??????????????????????',
  },
  {
    id: '3',
    title: 'Pergunta 3',
    content: '??????????????????????????',
  },
   {
    id: '4',
    title: 'Pergunta 4',
    content: '??????????????????????????',
  },
  {
    id: '5',
    title: 'Pergunta 5',
    content: '???????????????????????????????',
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