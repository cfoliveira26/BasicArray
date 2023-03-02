// 01- Crie um array que receba 5 itens e exiba no console. //

let supermercado = ["Arroz", "Macarrão", "Peixe", "Carne", "Feijão" ]
console.log(supermercado)

//02- Utilize um método para adicionar um nome ao inicio do array.//

let supermercado2 = ["Arroz", "Macarrão", "Peixe", "Carne", "Feijão" ]
supermercado2.unshift ("Frango")
console.log(supermercado2)

// 03- Utilize um método para remover o último nome do array. //

let supermercado3 = ["Arroz", "Macarrão", "Peixe", "Carne", "Feijão" ]
supermercado3.pop()
console.log(supermercado3)

// 04- Utilize um método para adicionar dois nomes ao fim do array.//
let supermercado4 = ["Arroz", "Macarrão", "Peixe", "Carne", "Feijão" ]
supermercado4.push("Verduras","Frutas")
console.log(supermercado4)

//05- Utilize um método para remover o primeiro nome do array.//
let supermercado5 = ["Arroz", "Macarrão", "Peixe", "Carne", "Feijão" ]
supermercado5.shift()
console.log(supermercado5)

// 06 Utilize um método para organizar em ordem crescente o seguinte array: let numbers = [7,5,6,3,8,9,2,1,4]//
let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort() ) 

//07 Crie um objeto que receba ao menos três propriedades sobre você.//
//08 Adicione uma nova propriedade sem alterar seu objeto inicial.//
//09 Remova uma propriedade desse objeto.//
//10-Mostre no console todas as propriedades desse objeto.//
let caracteristicas = ["Sincero", "criativo", "persistente" ]
caracteristicas.push("Adaptável")
console.log(caracteristicas)
caracteristicas.shift()
console.log(caracteristicas)

//11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos.  Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. Na propriedade amigos, adicione ao menos 4 itens.//
//12- Mostre no console o nome de um amigo de cada lista.//
let Amigos1 =["Felipe", "Rodrigo", "Fernando", "Mariana" ]
let Amigos2 =["Roberto", "Luan", "Catarina", "Ana" ]
let Amigos3 =["Regiane", "Paula", "Luiz", "Frederico" ]
let Amigos4 =["Ivana", "Thais", "José", "Inácio" ]
let Amigos5 =["Daniel", "Alberto", "Luciana", "Tatiana" ]
let cad1 = ["Nome", "Idade", "Telefone", Amigos1]
let cad2 = ["Nome", "Idade", "Telefone", Amigos2]
let cad3 = ["Nome", "Idade", "Telefone", Amigos3]
let cad4 = ["Nome", "Idade", "Telefone", Amigos4]
let cad5 = ["Nome", "Idade", "Telefone", Amigos5]
let cadastro = [cad1,cad2,cad3,cad4,cad5]
console.log(cadastro)
console.log(Amigos1[0])
console.log(Amigos2[0])
console.log(Amigos3[0])
console.log(Amigos4[0])
console.log(Amigos5[0])







