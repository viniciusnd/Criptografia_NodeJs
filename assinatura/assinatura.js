import { generateKeyPairSync, createSign, createVerify } from 'crypto'

const {privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
})

let dados = "Essa string vai ser assinada"

const assinador  = createSign('rsa-sha256')

assinador.update(dados)

const assinatura = assinador.sign(privateKey, 'hex')

console.log(`Assinatura: ${assinatura}`)

// Intermediario

dados += ' Arquivo alterado'

// Enviando o documento (documento, assinatura e publicKey)

const verificador = createVerify('rsa-sha256')
verificador.update(dados)

const verificando = verificador.verify(publicKey, assinatura, 'hex')

console.log(verificando)