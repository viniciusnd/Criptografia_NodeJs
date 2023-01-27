import { createHash, privateDecrypt } from 'crypto'

class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        this.hash = this.criaHash(senha)
    }

    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex') // SHA256 é um tipo de algoritmo criptográfico
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log ("Usuário autenticado com sucesso")
            return true
        } else {
            // console.log("Usuario ou senha incorretos")
            return false 
        }
    }
}

const usuario = new Usuario ('Pedro Vinicius', '1234')

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++){
    if(usuario.autentica('Pedro Vinicius', senhaTeste.toString())){
        console.log(`A senha do usuário é ${senhaTeste}`)
    }
}

