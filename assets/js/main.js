import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".orgsystem",
  `Em fevereiro de 2019 iniciei minha carreira como desevolvedor na
  Orgsystem Sofware, e nela estou até hoje. Graças a ela aprendi
  muita coisa e ainda como se portar como profissional e pessoa.
  Por lá, sou responsável por:<br />
  - Planejamento e estruturação dos projetos<br />
  - Criação de componentes reutilizáveis<br />
  - Desenvolvimento e manutenção de aplicações web (React)<br />
  - Desenvolvimento e manutenção de aplicativos mobile (React
  Native com Android e IOS) <br />
  - Desenvolvimento de API´s REST (Node.js)<br />
  - Integrações com APIs<br />
  - Ajudar parceiros de equipe no código <br />
  - Code Review <br />
  - Clean Code <br />
  - Deploy de aplicações Web<br />
  - Publicações em lojas ( Play Store e Apple Store ).`,
  "Desenvolvedor Frontend",
  "Orgsystem Softaware",
  "Fev 2001 - Atual"
);

hoverChangeExperience(
  ".vmsolutions",
  `Como todo programador que se preze, tem que ter aquela empresa de garagem né. 
  Sempre que sobra um tempo eu costumo criar novos projetos, alguns por mero aprendizado,
  outros com a esperança de virar um super negócio, outros feitos com muita criatividade para aquela empresa que busca um site totalmente personalizado.
  Enfim, esse é o nome que dei pra esses casos, sempre buscando solucionar os problemas. 
  Você pode acompanhar um poucos desses projetos logo abaixo.`,
  "Desenvolvedor",
  "VMSolutions",
  "Horas vagas"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
);
hoverChangeDescription(
  ".sass",
  "Sass (pré-processador css) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass."
);
hoverChangeDescription(
  ".react",
  "ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. Sendo assim soluciona um dos o problemas do Javascript que é a tipagem fraca"
);
hoverChangeDescription(
  ".node",
  " O NodeJS é um runtime, que nada mais é do que um conjunto de códigos, API's, ou seja, são bibliotecas responsáveis pelo tempo de execução (é o que faz o seu programa rodar) que funciona como um interpretador de JavaScript fora do ambiente do navegador web."
);
