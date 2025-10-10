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
    title: 'Destruição e dano de bens:',
    content: 'Quebrar o celular, o computador, móveis ou qualquer objeto pessoal da vítima; rasgar fotos, roupas e documentos; esconder ou destruir itens de valor sentimental ou profissional.',
  },
  {
    id: '2',
    title: 'Apropriação e furto:',
    content: 'Pegar dinheiro ou cartões bancários sem permissão, vender ou alugar bens (casa, carro) sem o consentimento da pessoa, roubar objetos de valor, tomar posse do salário da vítima.',
  },
  {
    id: '3',
    title: 'Controle financeiro e de recursos:',
    content: 'Controlar todo o dinheiro e gastos da pessoa, proibi-la de trabalhar para que não tenha independência financeira, criar dívidas no nome da vítima, dar uma "mesada" insuficiente de propósito.',
  },
   {
    id: '4',
    title: 'Retenção de bens e documentos:',
    content: 'Esconder ou reter documentos pessoais (RG, CNH, passaporte), cartões de banco, ferramentas de trabalho, o celular ou as chaves de casa e do carro para impedir a liberdade da pessoa.',
  },
  {
    id: '5',
    title: 'Fraude e extorsão:',
    content: 'Obrigar a pessoa a assinar documentos ou procurações, realizar empréstimos ou financiamentos no nome da vítima sem o seu conhecimento, forçá-la a entregar dinheiro sob ameaça ou chantagem.',
  },
];


function AcordeaoAbusos4() {
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

export default AcordeaoAbusos4;