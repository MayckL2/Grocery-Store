export function addCar(choice: any, amount: number, size: number) {
    let newCar: any = []
    let storage: any = []
    storage = JSON.parse(sessionStorage.getItem('car') || '{}')
    if (sessionStorage.getItem('car')) {
        storage.push({ choice: choice, amount: amount, size: size })
        sessionStorage.setItem('car', JSON.stringify(storage))
    } else {
        newCar.push({ choice: choice, amount: amount, size: size })
        sessionStorage.setItem('car', JSON.stringify(newCar))
    }
    // alert(`${choice.modelo} foi adicionado no carrinho`)
    console.log(storage)
}

// Limpa o carrinho ao comprar todos os items
export function buyAll() {
    sessionStorage.removeItem('car')
}

// Salva a seleção do usuario para exibir na pagina daquele item
export function select(choice: any){
    sessionStorage.setItem("choice", JSON.stringify(choice))
}