document.write ('<h1 class="diferente"> Casimiro Miguel </h1>'); 

var Valor1, bb, idade, s1, s2; 

Valor1= 55;

bb= true;

document.write('<p class="diferente" > Valor da variavel: ' + Valor1 + '</p>'); 

idade = new Array ( );
idade [0] = 13;
idade [1] = 20;
idade [2] = 18; 

document.write('<h2 class="diferente" > Idade do aluno: ' + idade [1] + '</h2>'); 

alert('METEU ESSA?' + idade [0]);

Valor1 = prompt ('LANCHEIRA DA NINA? QUAL MELHOR EPISODIO?' );

document.write ('<h2 class= "diferente"> VOCE ESTA CERTO, O EP QUE ' + Valor1 + ' É O MELHOR' + '</h2>') ;

bb=confirm('QUER COMPRAR A LANCHEIRA DA NINA?');
document.write('<h2 class="diferente"> VOCÊ AMASSOU A LANCHEIRA? ' + bb + '</h2>');

s1 = prompt('QUANTAS LANCHEIRAS A NINA JA VENDEU ILEGAMENTE? ');
s2 = prompt('E QUANTAS O THOMAS VENDEU PARA A MAFIA? ')

document.write('<h2 class="diferente"> FORAM  ' + (parseInt(s1) + parseInt (s2)) + ' LANCHEIRAS TRAFICADAS </h2>');