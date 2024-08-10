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
      console.log(`${this.nome} o ${this.tipo} no ataque usou a Espada!`)
    } else if(this.tipo === "Monje"){
      console.log(`${this.nome} o ${this.tipo} no ataque usou artes marciais!`)
    } else if(this.tipo === "Ninja"){
      console.log(`${this.nome} no ataque usou Shurikens!`)
    }
  }
}

let Caio = new heroi("Caio", 18, "Mago")
let LeoDicaprio = new heroi("LeoDicaprio", 25, "Guerreiro")
let Joao = new heroi("João", 18, "Monje")
let Paulo = new heroi("Paulo", 21, "Ninja")

Caio.atacar()
LeoDicaprio.atacar()
Joao.atacar()
Paulo.atacar()