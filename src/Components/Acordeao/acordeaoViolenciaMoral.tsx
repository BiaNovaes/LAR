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
    title: 'Calúnia:',
    content: 'Acusar falsamente a pessoa de ter cometido um crime que você sabe que ela não cometeu. Por exemplo: espalhar para os outros que ela roubou algo, que é traficante ou que agrediu alguém.',
  },
  {
    id: '2',
    title: 'Difamação:',
    content: 'Espalhar fatos ou histórias (verdadeiras ou falsas) para terceiros com a intenção de manchar a reputação da pessoa. Por exemplo: fazer fofoca sobre a vida íntima dela para amigos, familiares ou colegas de trabalho; postar em redes sociais que ela é má profissional ou infiel.',
  },
  {
    id: '3',
    title: 'Injúria:',
    content: 'Ofender diretamente a dignidade ou o valor de alguém com xingamentos e palavras que ferem a autoestima. Por exemplo: chamar a pessoa de "burra(o)", "inútil", "incapaz", usar ofensas racistas ou humilhá-la por sua aparência, orientação sexual ou crenças.',
  },
   {
    id: '4',
    title: 'Exposição Vexatória e Ridicularização',
    content: 'Expor a vida íntima da pessoa, publicando ou compartilhando fotos, vídeos ou áudios sem o seu consentimento para causar constrangimento. Inclui também zombar, imitar ou ridicularizar a pessoa publicamente por seu jeito de falar, vestir ou se comportar.',
  },
  {
    id: '5',
    title: 'Ataques e Perseguição Virtual (Cyberbullying)',
    content: 'Utilizar a internet e as redes sociais para atacar sistematicamente a imagem e a honra da pessoa. Por exemplo: criar perfis falsos para difamá-la, espalhar boatos em grupos de WhatsApp, organizar "linchamentos virtuais" ou expor seus dados pessoais.',
  },

];


function AcordeaoAbusos5() {
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

export default AcordeaoAbusos5;