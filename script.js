class heroi{
  constructor(nome , idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar(){
    if(this.tipo === "Mago"){
      console.log(`${this.nome} o ${this.tipo} no ataque usou magia!`)
    } else if(this.tipo === "Guerreiro"){
      console.log(`${this.nome} o ${this.tipo} no ataque usou a espada!`)
    } else if(this.tipo === "Monje"){
      console.log(`${this.nome} o ${this.tipo} no ataque usou artes marciais!`)
    } else if(this.tipo === "Ninja"){
      console.log(`${this.nome} o ${this.tipo} no ataque usou shurikens!`)
    }
  }
}

let caio = new heroi("Caio", 18, "Mago")
let leoDicaprio = new heroi("LeoDicaprio", 25, "Guerreiro")
let joao = new heroi("João", 18, "Monje")
let paulo = new heroi("Paulo", 21, "Ninja")

caio.atacar()
leoDicaprio.atacar()
joao.atacar()
paulo.atacar()