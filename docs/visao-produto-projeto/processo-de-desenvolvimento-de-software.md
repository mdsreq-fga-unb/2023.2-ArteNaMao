## Histórico de revisão

|    Data    | Versão |              Descrição              |  Autor(es)  |
| :--------: | :----: | :---------------------------------: | :---------: |
| 27/09/2023 |  1.0   | Criação e estruturação do documento | Ana Karoliny, Bruno Tarquinio, Guilherme Evangelista, Marina Márcia e Yan Werlley|

## Como escolhemos nossa abordagem de desenvolvimento de software  
 Escolhemos a abordagem de Sommerville para decidir qual abordagem de desenvolvimento de software utilizaremos.Nela, a escolha da abordagem de desenvolvimento de software pode ser facilitada através da resposta de uma série de perguntas sobre o sistema, o time de desenvolvimento e os stakeholders envolvidos, abarcando assim questões técnicas, humanas e organizacionais.

### Questões Técnicas
 - **Qual é o tamanho do sistema que está sendo desenvolvido?** É um software de pequeno porte.
 - **Que tipo de sistema está sendo desenvolvido?** Uma aplicação Web de pequena complexidade.
 - **Qual é a vida útil prevista para o sistema?** A princípio, vida útil de média duração.
 - **O sistema está sujeito a controle externo?** Sim, pelo cliente e pelo acompanhamento da disciplina.

### Questões Humanas
  - **Qual é o nível de competência dos projetistas e programadores do time de desenvolvimento?** O nível de competência da equipe está bem variado,com pessoas tendo experiência no desenvolvimento de software e outras nem tanto.
- **Como está organizado o time de desenvolvimento?** O time contém 5 integrantes, e apesar de termos os papeis definidos, todos devem participar da maioria das atividades.
 - **Quais são as tecnologias disponíveis para apoiar o desenvolvimento do sistema?** Muitas ferramentas irão nos auxiliar principalmente o discord , github e vscode.

### Questões Organizacionais
  - **É importante ter uma especificação e um projeto (design) bem detalhados antes de passar para a implementação — talvez por motivos contratuais?** Não, partes do sistema podem ser construídas durante todo o projeto.
- **É realista uma estratégia de entrega incremental, na qual o software é entregue aos clientes ou outros stakeholders e um rápido feedback é obtido?** Sim, pois há extrema proximidade do cliente com o Product Owner e a equipe de desenvolvimento.
- **Os representantes do cliente estarão disponíveis e dispostos a participar do time de desenvolvimento?** Não, o desenvolvimento só será feito pela equipe , com o cliente participando de reuniões de feedback e na elaboração de novos requisitos.
- **Existem questões culturais que possam afetar o desenvolvimento do sistema?** Não, pois o time é novo e não tem apego a determinado método de desenvolvimento.


   Levando em consideração todas as respostas do grupo às perguntas sugeridas por Sommerville (2018), chegou-se às seguintes conclusões:

O software a ser desenvolvido é pequeno, de pequena complexidade e vida útil média, o que indica que um processo ágil pode ser suficiente, não sendo necessário um esforço tremendo de documentação para realizar comunicação entre a equipe e o cliente;
O time de desenvolvimento será o principal responsável pelo desenvolvimento, é constituidos por pessoas experientes e abituadas com as ferramentas e tecnologias necessárias que facilitam muito a comunicação do time , deixando ainda mais propício à uma metodologia ágil.
A implementação pode começar a ser realizada antes da completa especificação do produto, assim como podem ser feitas pequenas entregas incrementalmente, das quais podem ser recebidos feedbacks rapidamente do cliente e do professor.


## Metodologia

 A metodologia Ágil escolhida foi o scrum/xp.Ao implementar o Scrum, promovemos uma comunicação mais eficaz entre os membros da equipe, por meio de reuniões regulares e transparentes, o que reduz a probabilidade de mal-entendidos e alinha todos os envolvidos em torno de objetivos comuns. Além disso, ao integrar o XP, fortalecemos a colaboração intensiva entre os membros da equipe, incentivando a programação em par e práticas de codificação compartilhada, o que resulta em um código mais limpo, testado e robusto. Essas metodologias combinadas proporcionam um ambiente ágil e flexível, permitindo que a equipe responda de maneira eficiente a mudanças nos requisitos do cliente, mantendo um foco constante na entrega de valor e na satisfação do cliente.

| Evento               | Descrição                                                                                                                                                                | Ferramenta |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| Daily Scrum          | Reunião diária com duração máxima de 15 minutos, na qual os membros da equipe devem discutir o progresso de trabalho da Sprint desde a última reunião diária             | Discord    |
| Sprint Planning      | Reunião realizada no inicio de cada sprint com o intuito de definir as Histórias de Usuário entregáveis na sprint que virá a seguir                                      | Discord    |
| Sprint Retrospective | Evento importante realizado pela equipe com intuito de refletir sobre o processo de trabalho da sprint passada, para identificar maneiras de melhorar as sprints futuras | Discord    |
| Sprint Review        | Evento realizado pela equipe para revisar todas as funcionalidades concluídas ao final da sprint com a participação do Product Owner (PO)                                | Discord    |
| Product Backlog      | Lista priorizada dos requisitos do produto que precisam ser desenvolvidos para atender aos objetivos do projeto                                                          | GitPages       |

## Práticas do XP

| Estratégia              | Descrição                                                                                                                                                                                    | Ferramenta                   |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Toda a Equipe           | Faz com que a equipe possa trabalhar junta para resolver problemas e alcançar os objetivos do projeto, aumentando a produtividade e diminuindo conflitos entre os membros da equipe          | Discord                      |
| Pequenas Versões        | Torna o acompanhamento do progresso do projeto de forma mais clara e objetiva. Permite, também, que a equipe e o cliente identifiquem problemas com mais rapidez                             | VisualStudio Code            |
| Propriedade Coletiva    | A prática de propriedade coletiva declara que qualquer membro da equipe pode alterar qualquer parte do código do sistema a qualquer momento                                                  | VisualStudio Code            |
| Padrões de Codificações | Definir um padrão de codificação aumenta a capacidade de entendimento do código entre os membros da equipe                                                                                   | VisualStudio Code            |
| Ritmo Sustentável       | Evita a sobrecarga de trabalho e o esgotamento físico e mental dos membros da equipe. O que sucede em uma boa qualidade do produto, diminuição na incidência de erros e prazos não cumpridos | VisualStudio Code            |                                                                                              
| Integração Contínua     | Automatizar a compilação e os testes do código faz com que problemas (bugs) sejam detectados com maior facilidade                                                                            | VisualStudio Code \| Git Hub |
| Design Simples          | Um projeto com a prática de um design simples é benéfico, principalmente, para a manutenibilidade do projeto                                                                                 | VisualStudio Code            |
| Refatoração             | Prática que envolve a melhoria contínua do código existente sem alterar sua funcionalidade                                                                                                   | VisualStudio Code            |         |
| Programação em Pares    | Prática que permite que dois ou mais participantes trabalhem simultâneamente no mesmo código através de uma vídeo-chamada ou até chamada de voz                                              | VisualStudio Code \| Discord |


## Atividades da Engenharia de Requisitos no Scrum/Xp

|Atividade de engenharia de requisitos| Onde ocorre no scrum/xp|Descrição da atividade|
|-------------------------------------|------------------------|----------------------|
|Elicitação e Descoberta de requisitos(ED)| Durante todo o processo do scrum/xp|baseia-se nas atividades de elicitação - extrair, obter ou provocar uma resposta, reação ou informação de alguém ou de algo - e descoberta - encontrar algo que antes não era conhecido ou não estava disponível. As fontes da elicitação podem ser diversas, desde stakeholders, até IAs, pesquisas ou sistemas existentes. Deve-se atentar aos requisitos funcionais e não funcionais, assim como descobrir quem são os interessados, seus problemas, necessidades, desejos e expectativas, além de outros fatores que podem representar possibilidades ou restrições ao produto de software.|
|Análise e Consenso de requisitos(AC) | Durante todo o processo do scrum/xp|envolve a análise - analisar os requisitos em sua forma “bruta” - e o consenso - conciliar as fontes de informação em direção a um entendimento comum sobre o conjunto de requisitos.|
|Declaração de Requisitos (DR)| Ocorre durante o processo de Organização e atualização dos requisitos(ao longo de todo processo do scrum/xp)| diz respeito à comunicação dos requisitos entre os envolvidos, por meio de linguagem natural, estruturada ou não, de maneira escrita e/ou oral (face a face, áudio, vídeo) em diferentes níveis degranularidade (mais detalhes, menos detalhes, agrupados ou divididos).|
|Representação de Requisitos (RR)| Ocorre ao longo de todo o processo do scrum/xp| é a produção da apresentação dos requsitos em modelos e/ou visualizações do produto, podendo ser informal, semiformal ou formal.|
|Verificação e Validação de Requisitos (VV)| Ocorre ao longo de todo o processo do scrum/xp| estas atividades dizem respeito à qualidade dos requisitos. A validação é uma forma de constatar a qualidade externa, confirmando (ou não) se a solução correta está sendo construída. Já a verificação é voltada para a qualidade interna, e busca confirmar (ou não) de que o que a solução ou requisito está sendo feita da maneira correta.|
|Organização e Atualização de Requisitos (OA)| Ocorre ao longo de todo o projeto|este tópico refere-se a manutenção do conjunto de requisitos do produto adequadamente, organizados e atualizados ao longo do tempo. Na organização estabelece-se a maneira como os requisitos do produto serão estruturados (lista, mapa), rastreados, refinados e priorizados com base no framework de requisitos adequado ao produto e/ou projeto, e a atualização é o esforço de manter a organização dos requisitos sempre em seu estado mais atual, diante das possíveis mudanças e consenso entre as fontes de requisitos.|