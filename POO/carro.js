/**
 * Carro - POO
 * @author Alex Lima
 */
console.clear();

// Criando a classe modelo
class Carro {
    // Atributos
    constructor(marca, modelo, ano, ligado = false) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = ligado;
        
    }

    // Métodos
    criarCarro() {
        console.log("-------------------------------------------");
        console.log("🚗 Carro criado!");
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }

    ligar() {
        if (this.ligado) {
            console.log(`🔧 O carro ${this.modelo} já está ligado!`);
        } else {
            this.ligado = true;
            console.log(`🚗 O carro ${this.modelo} foi ligado!`);
        }
    }

    desligar() {
        if (!this.ligado) {
            console.log(`🛑 O carro ${this.modelo} já está desligado!`);
        } else {
            this.ligado = false;
            console.log(`🛑 O carro ${this.modelo} foi desligado!`);
        }
    }

    acelerar() {
        if (this.ligado) {
            console.log(`🏁 O carro ${this.modelo} está acelerando! VRUMMM!`);
        } else {
            console.log(`⚠ Não é possível acelerar! Ligue o carro ${this.modelo} primeiro.`);
        }
    }
}

/****** Testando a classe ******/
const carro1 = new Carro("Ford", "Mustang", "1969");
carro1.criarCarro();
carro1.ligar();
carro1.acelerar();
carro1.desligar();

console.log("");

const carro2 = new Carro("Toyota", "Supra", "1994");
carro2.criarCarro();
carro2.acelerar(); 
carro2.ligar();
carro2.acelerar();
carro2.desligar();

