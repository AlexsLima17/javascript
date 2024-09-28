/**
 *  calculo de real para dólar 
 * @author Alex Lima & Kevin Teodoro
 */

const readline = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
    
readline.question('Qual o valor em Reais (R$)? ', (valorReais) => { 
    readline.question('Qual a taxa de câmbio (R$ para US$)? ', (taxaCambio) => { 
        
        // Converte os valores para números 
        const reais = parseFloat(valorReais); 
        const taxa = parseFloat(taxaCambio); 
        
        // Calcula o valor em dólares 
        const valorDolares = reais / taxa;

         // Exibe o resultado 
         console.log(`O valor em dólares (US$) é: ${valorDolares.toFixed(2)}`);

        readline.close();
    
    }); 

}); 




