# DESAFIO OBJETOS E MODULOS JAVASCRIPT

Você deve criar um sistema para calcular o valor total de um pedido, considerando uma porcentagem
de desconto e o frete. O cálculo do valor total do pedido consiste em aplicar o desconto ao valor
básico do pedido, e adicionar o valor do frete. A regra para cálculo do frete é a seguinte: 

|          Valor básico do pedido (sem desconto)          | Frete              |           
|---------------------------------------------------------|--------------------|
| Abaixo de RR$ 100.00                                    | R$ 20.00           |     
| De R$ 100.00 até R$ 200.00 exclusive                    | R$ 12.00           |          
| R$ 200.00 ou mais                                       | Grátis             |   

## Exemplo 1:
| ENTRADA (dados do pedido: código, valor básico, porcentagem de desconto) Frete    | SAÍDA                  |
|-----------------------------------------------------------------------------------|------------------------|
| 1034                                                                              | Pedido código 1034     |     
| 150.00                                                                            | Valor total: R$ 132.00 |          
| 20.0                                                                              |                        |   

## Exemplo 2:
| ENTRADA (dados do pedido: código, valor básico, porcentagem de desconto) Frete    | SAÍDA                  |
|-----------------------------------------------------------------------------------|------------------------|
| 2282                                                                              | Pedido código 2282     |     
| 800.00                                                                            | Valor total: R$ 720.00 |          
| 10.0                                                                              |                        |  

## Exemplo 3:
| ENTRADA (dados do pedido: código, valor básico, porcentagem de desconto) Frete    | SAÍDA                  |
|-----------------------------------------------------------------------------------|------------------------|
| 1309                                                                              | Pedido código 1309     |     
| 95.90                                                                             | Valor total: R$ 115.90 |          
| 0.0                                                                               |                        |  

## Modelo conceitual de entidade

Um pedido deve ser representado porr um objeto conforme projeto abaixo.

|          Order          |           
|-------------------------|
| - code : Integer        |
| - basic : Double        |
| - discount : Double     |

## Tecnologias utilizadas

- HTML5
- JavaScript

# Autor

Walter Mariano Reis

- Linkedin: https://www.linkedin.com/in/walter-r-1b606880/
- GitHub: https://github.com/walterdevreis?tab=repositories

