//5 opções de comida com seus respectivos tempos pré-definidos//
//Pipoca - 10s; Macarráo 8s; Carne - 15 segundos; Feijão - 12s ; Brigadeiro - 8 segundos;
//Pode alterar o tempo padrão; Se o tempo for 2x maior que o padrão exibir "a comida queimou"
//Se o tempo for menor que o padrão exibir "tempo insuficiente"
//Opções não listadas exibem "prato inexistente"
//tempo 3x maior do que o padrão exibir "kabuum!"
//ao final de cada tarefa exibir "prato pronto, bom apetite!"*/

var comida;
var tempoPadrao;
var oDobro;
var oTriplo;




comida = "Pipoca";
tempo = 12;
oDobro = tempoPadrao*2;
oTriplo= tempoPadrao*3;

    if(comida =="Pipoca" && tempoPadrao==10) {
        console.log("Prato pronto. Bom apetite!");
           }
           else if(comida=="Macarrão" && tempoPadrao==8){
            console.log("Prato pronto. Bom apetite!");
           }
           else if(comida == "Carne"&& tempoPadrao==15){
               console.log("Prato pronto. Bom apetite!");
           }
           else if(comida == "Feijão"&& tempoPadrao==12){
               console.log("Prato pronto. Bom apetite!");
           }
           else if (comida == "Brigadeiro"&& tempoPadrao==8){
               console.log("Prato pronto. Bom apetite!");
           }
           else if (comida == "Pipoca" || "Macarrão" || "Carne" || "Feijão"|| "Brigadeiro" && oDobro){
               console.log("A Comida queimou.");
           }
           else if (comida == "Pipoca" || "Macarrão" || "Carne" || "Feijão"|| "Brigadeiro" && tempo > oTriplo){
            console.log("Kabuuum!");
           }           
           else if (comida != "Pipoca" || "Macarrão" || "Carne" || "Feijão"|| "Brigadeiro"){
               console.log("Prato inexistente.")
           }
     
        
   


