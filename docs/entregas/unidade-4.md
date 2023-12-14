## Caso de Uso:

### 1. Diagrama de Caso de Uso

![Alt text](image-17.png)

### 2. Especificação do Caso de Uso

﻿<a name="br1"></a> 

**GamaTech**

**VoyageX**

**Especificação de Caso de Uso: Fazer Login**

**Versão 2.0**



<a name="br2"></a> 

VoyageX

Versão:

3\.0

#### Especificação de Caso de Uso: Fazer login

Data: 12/12/2023

**Histórico da Revisão**

**Data**

06/12/2023

**Versão**

1\.0

**Descrição**

Criação inicial do documento

Correção inicial do professor

**Autor**

Arthur Augusto

Ana Karoliny e

Marina Márcia

Arthur Augusto,

Ana Karoliny e

Marina Márcia

07/12/2023

2\.0

12/12/2023

3\.0

Correção final do documento

Página 2

©GamaTech, 14/12/23



<a name="br3"></a> 

VoyageX

Versão:

3\.0

Especificação de Caso de Uso: Fazer login

Data: 12/12/2023

**Índice**

1\. FAZER LOGIN

1\.1. Breve Descrição

1\.2. Ator

4

4

2\. FLUXO BÁSICO DE EVENTOS

4

2\.1. Início

2\.1. Início

2\.2. Tela de Login

2\.3. Inserção de Informações de Login

2\.4. Validação das Informações de Login

2\.5. Sucesso

4

4

4

4

4

4

2\.6. Fim

3\. FLUXOS ALTERNATIVOS

4

3\.1. Usuário não cadastrado

3\.2. Erro de validação

4

5

4\. FLUXO DE EXCEÇÃO

4\.1. Erro de sistema

5

5

5\. PRÉ-CONDIÇÃO

6\. PÓS-CONDIÇÃO

5

5

7\. REQUISITO ESPECIAL

7\.1. Observação

5

5

8\. INFORMAÇÕES ADICIONAIS

5

Página 3

©GamaTech, 14/12/23



<a name="br4"></a> 

VoyageX

Versão:

3\.0

Especificação de Caso de Uso: Fazer login

Data: 12/12/2023

**Especificação de Caso de Uso: Fazer login**

**1.**

**FAZER LOGIN**

**1.1. Breve Descrição**

Este caso de uso, descreve o processo pelo qual um usuário do VoyageX, um

sistema que facilita viagens, realiza o login no sistema.

**1.2. Ator**

● Usuário

**2.**

**FLUXO BÁSICO DE EVENTOS**

**2.1.** O caso de uso é iniciado quando o usuário selecionar a opção “realizar

login”;

**2.2.** O sistema apresenta os campos para a realização do login;

(RN01)

**2.3.** O usuário informa os dados para login;

**2.4.** O sistema valida os dados; (RN02) (FE01)

**2.5.** O sistema informa “login realizado com sucesso”;

(FE02)

**2.6.** O caso de uso é encerrado.

**3. FLUXOS ALTERNATIVOS**

**3.1.** Se o usuário não estiver cadastrado no VoyageX, o sistema o direciona para

a tela de cadastro.

Página 4

©GamaTech, 14/12/23



<a name="br5"></a> 

VoyageX

Versão:

3\.0

Especificação de Caso de Uso: Fazer login

Data: 12/12/2023

**3.2.** Se as informações inseridas pelo usuário estiverem incorretas, o sistema

apresenta uma mensagem de erro. O usuário pode então tentar novamente ou corrigir

as informações e tentar novamente.

**4. FLUXO DE EXCEÇÃO**

4\.1. Se ocorrer um erro de sistema, o sistema apresenta uma mensagem de

erro. O usuário pode então tentar novamente mais tarde.

**5. PRÉ-CONDIÇÃO**

● O usuário deve ter criado uma conta no VoyageX.

**6. PÓS-CONDIÇÃO**

● O usuário está logado no sistema.

**7. REQUISITO ESPECIAL**

● O caso de uso deve ser acessível via qualquer dispositivo, incluindo notebook,

tablet, smartphone e desktop.

**7.1.** Para atender a este requisito especial, o sistema deve ser projetado de

forma a permitir que o usuário insira suas informações de login usando um teclado

físico ou virtual, ou um trackpad. Além disso, o sistema deve exibir a tela de login em

uma resolução e tamanho de fonte que sejam adequados para qualquer dispositivo.

**8. INFORMAÇÕES ADICIONAIS**

● O sistema pode armazenar as informações de login do usuário para que ele não

precise inseri-las novamente no futuro.

● O sistema pode oferecer a opção de recuperação de senha para o usuário caso

ele a esqueça.

**9. REGRAS DE NEGÓCIO - RN**

● RN 01 - No passo 2.2 do FB:

○ E-mail válido

○ Senha

● RN 02 - no passo 2.4 do FB

○ E-mail válido (@gmail, @hotmail, @outlook)

Página 5

©GamaTech, 14/12/23



<a name="br6"></a> 

VoyageX

Versão:

3\.0

Especificação de Caso de Uso: Fazer login

Data: 12/12/2023

○ Senha válida (no mínimo 8 caracteres, incluindo pelo menos uma letra

maiúscula, um número, um caractere especial)

Página 6

©GamaTech, 14/12/23


<a name="br1"></a> 

**GamaTech**

**VoyageX**

**Especificação de Caso de Uso: Organizar itinerário**

**Versão 1.0**



<a name="br2"></a> 

VoyageX

Versão:

1\.0

#### Especificação de Caso de Uso: Organizar itinerário

Data: 06/12/2023

**Histórico da Revisão**

**Data**

06/12/2023

**Versão**

1\.0

**Descrição**

**Autor**

Ana Karoliny,

Criação inicial do documento

Arthur Augusto e

Marina Márcia/

Ana Karoliny

13/12/2023

2\.0

Correção com base em feedback

Página 2

©GamaTech, 12/6/23



<a name="br3"></a> 

VoyageX

Versão:

1\.0

Especificação de Caso de Uso: Organizar itinerário

Data: 06/12/2023

**Índice**

1\. ORGANIZAR ITINERÁRIO

1\.1. Breve Descrição

1\.2. Atores

4

4

2\. FLUXO BÁSICO DE EVENTOS

4

2\.1. Início

4

4

4

4

4

4

4

4

2\.2. Seleção de Destino

2\.3. Seleção de Acomodação

2\.4. Pesquisa de Atrações

2\.5. Seleção de Atrações

2\.6. Criação de Itinerário

2\.7. Visualização de Itinerário

2\.8. Fim

3\. FLUXOS ALTERNATIVOS

4

3\.1. Nenhum destino selecionado

3\.2. Nenhuma acomodação selecionada

3\.3. Nenhuma atração selecionada

4

4

4

4\. FLUXO DE EXCEÇÃO

4\.1. Erro de sistema

5

5

5\. PRÉ-CONDIÇÃO

5

5

5

6\. PÓS-CONDIÇÃO

7\. PONTOS DE EXTENSÃO

8\. REQUISITO ESPECIAL

5

6

8\.1. Observação

9\. INFORMAÇÕES ADICIONAIS

6

Página 3

©GamaTech, 12/6/23



<a name="br4"></a> 

VoyageX

Versão:

1\.0

Especificação de Caso de Uso: Organizar itinerário

Data: 06/12/2023

**Especificação de Caso de Uso: Organizar itinerário**

**1.**

**PESQUISAR DESTINO**

**1.1. Breve Descrição**

Este caso de uso, descreve o processo pelo qual um usuário do VoyageX, um

sistema que facilita viagens, organiza um itinerário de viagem.

**1.2. Atores**

● Usuário

● Provedor de serviços turísticos

**2.**

**FLUXO BÁSICO DE EVENTOS**

2\.1. O caso de uso é iniciado quando o usuário selecionar o destino, a data e a

acomodação que deseja ir.

2\.2. O usuário pesquisa as atrações do local.

2\.3. O sistema apresenta uma lista de atrações disponíveis.

2\.4. O usuário seleciona a(s) atração(ões) que deseja visitar.

2\.5. O sistema cria um itinerário com as atrações selecionadas.

2\.6. O sistema mostra para o usuário o itinerário criado.

2\.7. O caso de uso é encerrado.

**3. FLUXOS ALTERNATIVOS**

**3.1.** Se o usuário não selecionar nenhum destino, o sistema exibirá uma

mensagem de erro.

**3.2.** Se o usuário não selecionar nenhuma acomodação, o sistema exibirá uma

mensagem de erro.

**3.3.** Se o usuário não selecionar nenhuma atração, o sistema exibirá uma

Página 4

©GamaTech, 12/6/23



<a name="br5"></a> 

VoyageX

Versão:

1\.0

Especificação de Caso de Uso: Organizar itinerário

Data: 06/12/2023

mensagem de erro.

**4. FLUXO DE EXCEÇÃO**

**4.1.** Se ocorrer um erro de sistema, o sistema apresenta uma mensagem de

erro.

**5. PRÉ-CONDIÇÃO**

● O usuário deve ter um dispositivo com acesso à Internet.

**6. PÓS-CONDIÇÃO**

● O usuário tem um itinerário de viagem organizado.

**7. PONTOS DE EXTENSÃO**

● O provedor de serviços turísticos pode estender este ponto de extensão para

reservar uma atividade para o destino selecionado.

**8. REQUISITO ESPECIAL**

● O caso de uso deve ser acessível via qualquer dispositivo, incluindo notebook,

tablet, smartphone e desktop.

**8.1.** Para atender a este requisito especial, o sistema deve ser projetado de

forma a permitir que o usuário insira suas informações de login usando um teclado

físico ou virtual, ou um trackpad. Além disso, o sistema deve exibir a tela de login em

uma resolução e tamanho de fonte que sejam adequados para qualquer dispositivo.

**9. INFORMAÇÕES ADICIONAIS**

● O sistema pode sugerir atrações com base nos interesses do usuário.

● O sistema pode permitir que o usuário edite o itinerário após criá-lo.

Página 5

©GamaTech, 12/6/23



<a name="br6"></a> 

VoyageX

Versão:

1\.0

Especificação de Caso de Uso: Organizar itinerário

Data: 06/12/2023

Página 6

©GamaTech, 12/6/23


<a name="br1"></a> 

**GamaTech**

**VoyageX**

**Especificação de Caso de Uso: Pesquisar destino**

**Versão 1.0**



<a name="br2"></a> 

VoyageX

Versão:

1\.0

#### Especificação de Caso de Uso: Pesquisar destino

Data: 06/12/2023

**Histórico da Revisão**

**Data**

06/12/2023

**Versão**

1\.0

**Descrição**

**Autor**

Ana Karoliny,

Criação inicial do documento

Arthur Augusto e

Marina Márcia

Ana Karoliny

13/12/2023

2\.0

Correção com base em feedback

Página 2

©GamaTech, 12/6/23



<a name="br3"></a> 

VoyageX

Versão:

1\.0

Especificação de Caso de Uso: Pesquisar destino

Data: 06/12/2023

**Índice**

1\. PESQUISAR DESTINO

1\.1. Breve Descrição

1\.2. Atores

4

4

2\. FLUXO BÁSICO DE EVENTOS

4

2\.1. Início

2\.2. Tela de Login

2\.3. Inserção de Informações de Login

2\.4. Validação das Informações de Login

2\.5. Sucesso

4

4

4

4

4

2\.6. Fim

3\. FLUXOS ALTERNATIVOS

4

3\.1. Usuário não cadastrado

3\.2. Erro de validação

4

5

4\. FLUXO DE EXCEÇÃO

4\.1. Erro de sistema

5

5

5\. PRÉ-CONDIÇÃO

5

5

5

6\. PÓS-CONDIÇÃO

7\. PONTOS DE EXTENSÃO

8\. REQUISITO ESPECIAL

8\.1. Observação

5

5

9\. INFORMAÇÕES ADICIONAIS

5

Página 3

©GamaTech, 12/6/23



<a name="br4"></a> 

VoyageX

Versão:

1\.0

Especificação de Caso de Uso: Pesquisar destino

Data: 06/12/2023

**Especificação de Caso de Uso: Pesquisar destino**

**1.**

**PESQUISAR DESTINO**

**1.1. Breve Descrição**

Este caso de uso, descreve o processo pelo qual um usuário do VoyageX, um

sistema que facilita viagens, realiza a pesquisa de um destino.

**1.2. Atores**

● Usuário

● Provedor de serviços turísticos

**2.**

**FLUXO BÁSICO DE EVENTOS**

2\.1. O caso de uso é iniciado quando o usuário entra na página de procurar

destinos

2\.2. O sistema apresenta para o usuário uma lista de destinos.

2\.3. O usuário seleciona um destino que deseja ir.

2\.4. O sistema pede que o usuário selecione a data que deseja ir ao destino.

(RN01)

2\.5. O usuário seleciona a data que deseja ir.

2\.6. O caso de uso é encerrado.

**3. FLUXOS ALTERNATIVOS**

**3.1.** Se o usuário não selecionar nenhum destino, o sistema exibirá uma

mensagem de erro.

**4. FLUXO DE EXCEÇÃO**

**4.1.** Se ocorrer um erro de sistema, o sistema apresenta uma mensagem de

erro.

Página 4

©GamaTech, 12/6/23



<a name="br5"></a> 

VoyageX

Versão:

1\.0

Especificação de Caso de Uso: Pesquisar destino

Data: 06/12/2023

**5. PRÉ-CONDIÇÃO**

● O usuário deve ter um dispositivo com acesso à Internet.

**6. PÓS-CONDIÇÃO**

● O usuário tem informações sobre o destino selecionado.

**7. PONTOS DE EXTENSÃO**

● O sistema pode estender este ponto de extensão para pesquisar acomodações

no destino selecionado.

● O provedor de serviços turísticos pode estender este ponto de extensão para

reservar uma acomodação no destino selecionado.

**8. REQUISITO ESPECIAL**

● O caso de uso deve ser acessível via qualquer dispositivo, incluindo notebook,

tablet, smartphone e desktop.

**8.1.** Para atender a este requisito especial, o sistema deve ser projetado de

forma a permitir que o usuário insira suas informações de login usando um teclado

físico ou virtual, ou um trackpad. Além disso, o sistema deve exibir a tela de login em

uma resolução e tamanho de fonte que sejam adequados para qualquer dispositivo.

**9. INFORMAÇÕES ADICIONAIS**

● O sistema pode armazenar as pesquisas anteriores do usuário para que ele

possa retomar suas pesquisas mais tarde.

Página 5

©GamaTech, 12/6/23



<a name="br6"></a> 

VoyageX

Versão:

1\.0

Especificação de Caso de Uso: Pesquisar destino

Data: 06/12/2023

Página 6

©GamaTech, 12/6/23
