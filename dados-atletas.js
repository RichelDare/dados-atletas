// classe atleta
class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    // Métodos para calcular dados do atleta
    calcularCategoria(){ 
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil";
        } else if(this.idade == 12 || this.idade == 13){
            return "Juvenil";
        } else if(this.idade == 14 || this.idade == 15){
            return "Intermediário";
        } else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }
    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }
    calcularMediaValida(){
        let soma = 0;

        function ordenar(a, b){
            return a - b;
        }
        const notas = this.notas.sort(ordenar).slice(1, this.notas.length - 1);
        notas.forEach((elemento) => {
            soma += elemento;
        });
        const media = soma / notas.length;
        this.media = media;
        return media;
    }
    // Métodos para obter dados do atleta
    obtemNomeAtleta(){
        return this.nome;
    }
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
        return this.peso;
    }
    obtemAlturaAtleta(){
        return this.altura;
    }
    obtemIMC(){
        return this.calcularIMC();
    }
    obtemNotasAtleta(){
        return this.notas.join(", ");
    }
    obtemCategoria(){
        return this.calcularCategoria();
    }
    obtemMediaValida(){
        return this.calcularMediaValida();
    }
}

// Saída no console
function mostrarResultados(atleta){
    console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
    console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
    console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
    console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
    console.log(`IMC: ${atleta.obtemIMC()}`);
    console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
    console.log(`Categoria: ${atleta.obtemCategoria()}`);
    console.log(`Média: ${atleta.obtemMediaValida()}`);
    
}

// Exemplo de saída
const atleta1 = new Atleta("César Augusto", 30, 40.5, 1.25, [10,9.34,8.42,10,7.88]);
mostrarResultados(atleta1);