console.clear();

// Classe base para veículos
class Veiculo {
    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    criarVeiculo() {
        console.log("-------------------------------------------");
        console.log(`🚗 Veículo criado!`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Ano: ${this.ano}`);
    }
}

// Classe Carro que herda de Veiculo
class Carro extends Veiculo {
    constructor(modelo, cor, ano, ligado = false) {
        super(modelo, cor, ano);
        this.ligado = ligado;
    }

    criarCarro() {
        console.log("-------------------------------------------");
        console.log(`🚗 Carro criado!`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Cor: ${this.cor}`);
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

// Classe Aviao que herda de Veiculo
class Aviao extends Veiculo {
    constructor(modelo, envergadura) {
        super(modelo);
        this.envergadura = envergadura;
    }
    criarAviao() {
        console.log("-------------------------------------------");
        console.log(`✈ Avião criado!`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Envergadura: ${this.envergadura}`);
    }

    acelerar() {
        console.log(`✈ O avião ${this.modelo} está acelerando na pista! Turbinas a todo vapor!`);
    }

    aterrizar() {
        console.log(`🛬 O avião ${this.modelo} está aterrizando com segurança!`);
    }
}

/****** Testando o código ******/
const carro1 = new Carro("Mustang", "Verde", "1969");
carro1.criarCarro();
carro1.ligar();
carro1.acelerar();
carro1.desligar();

console.log("");

const aviao1 = new Aviao("Boeing", "60,93 metros");
aviao1.criarAviao();
aviao1.acelerar();
aviao1.aterrizar();
