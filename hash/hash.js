import { createHash } from 'crypto'

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex') // SHA256 é um tipo de algoritmo criptográfico
}

console.log(criaHash("Vinicius"))

class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha)
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === criaHash(senha)) {
            console.log ("Usuário autenticado com sucesso")
            return true
        } else {
            console.log("Usuario ou senha incorretos")
            return false 
        }
    }
}

const usuario = new Usuario ('Pedro Vinicius', '12345')
console.log(usuario)

usuario.autentica('Pedro Vinicius', '12345')
usuario.autentica('Pedro Vinicius', '123456')

