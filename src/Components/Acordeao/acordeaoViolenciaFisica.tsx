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
    title: 'Ações diretas',
    content: 'Tapas, beliscões, empurrões, socos, chutes, puxões de cabelo, sacudidas, apertões, torções, estrangulamentos ou sufocamentos.',
  },
  {
    id: '2',
    title: 'Agressões com objetos',
    content: 'Uso de armas, cintos, sapatos, pedaços de pau, pedras, ou qualquer outro objeto para ferir a vítima.',
  },
  {
    id: '3',
    title: 'Ações que não deixam marcas',
    content: 'Apertar com força, sacudir, imobilizar ou forçar a vítima a ficar em posições desconfortáveis.',
  },
   {
    id: '4',
    title: 'Confinamento e abandono',
    content: 'Trancar a pessoa em casa ou em algum cômodo, impedi-la de sair, proibi-la de usar meios de transporte, abandoná-la em locais desconhecidos ou perigosos.',
  },
  {
    id: '5',
    title: 'Danos à saúde',
    content: 'Recusar ou negar assistência médica, forçar o uso de álcool ou drogas, privação de sono, impedir o acesso a medicamentos necessários, forçar a realização de procedimentos perigosos.',
  },

];


function AcordeaoAbusos() {
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

export default AcordeaoAbusos;