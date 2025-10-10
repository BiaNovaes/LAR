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
    title: 'Estupro e contato forçado:',
    content: 'Forçar a pessoa a praticar qualquer ato sexual (vaginal, anal ou oral) sem o seu consentimento, através de força, ameaça ou aproveitando-se de sua incapacidade de resistir; forçar a pessoa a tocar ou ser tocada em suas partes íntimas.',
  },
  {
    id: '2',
    title: 'Assédio e importunação sexual:',
    content: 'Fazer comentários ou piadas de caráter sexual, realizar toques, beijos ou contatos físicos indesejados e sem permissão ("passar a mão", "encoxar"), pressionar alguém a ter relações sexuais, mesmo sem uso de força física.',
  },
  {
    id: '3',
    title: 'Exploração sexual:',
    content: 'Obrigar a pessoa a se prostituir, a fazer vídeos ou fotos pornográficas, a participar de qualquer ato sexual em troca de dinheiro, bens ou favores, ou para evitar punição. Inclui também a divulgação de imagens íntimas sem consentimento.',
  },
   {
    id: '4',
    title: 'Violação da saúde e direitos reprodutivos:',
    content: 'Impedir o uso de métodos contraceptivos (camisinha, pílulas), forçar a gravidez, forçar um aborto ou impedir que a pessoa realize um aborto nos casos previstos em lei.',
  },
  {
    id: '5',
    title: 'Exposição a atos sexuais:',
    content: 'Obrigar a pessoa a ver, presenciar ou participar de atos sexuais com outras pessoas ou de pornografia contra a sua vontade.',
  },

];


function AcordeaoAbusos3() {
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

export default AcordeaoAbusos3;