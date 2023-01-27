import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function criaHashComSal(senha){
    const sal = randomBytes(16).toString('hex')

    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex')

    return `${sal}:${senhaHasheada}`
}

class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }

    autentica(nome, senha){
        if(nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64)
            const hashReal = Buffer.from(this.hash, 'hex')

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

            if(hashesCorrespondem){
                console.log("Usuario autenticado com sucesso")
                return true
            } else {
                console.log("Usuario ou senha incorretos")
            }
        }
    }
}

const vinicius = new Usuario ('Pedro Vinicius', '12345')
console.log(vinicius)

vinicius.autentica('Pedro Vinicius', '12345') // sucesso

vinicius.autentica('Pedro Vinicius', '123456') // usuario ou senha incorretos