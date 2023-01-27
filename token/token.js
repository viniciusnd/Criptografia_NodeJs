import jwt from 'jsonwebtoken'

const chaveSecreta = "senha"

const token = jwt.sign(
    {
        apelido: "PV",
        profissao: "Dev"
    }, chaveSecreta
)

// console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)
console.log(tokenDecodificado) // iat: data, tempo...