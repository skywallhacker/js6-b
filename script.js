let bank = 'mobile operator'

let client = confirm('оплата мобильных услуг')

if(client === true) {
    let operator = 'belline ucel mobiuz humans'
    let mobileOperator = prompt('введите название опрератора' + ' ' + operator).trim().toLowerCase()
    if(operator.includes(mobileOperator)) {
        let numberPhone = prompt('введите номер телефона')
        let accept = confirm('проверьте номер телефона' + ' ' + numberPhone)
        if(accept === true) {
            let cardPassword = 1234
            alert('пароль от карты 1234')
            let password = +prompt('введите пароль от карты')
            if(password === cardPassword) {
                let balans = 100000
                alert('на вашем счету ' + balans) 
                let minusBalans = +prompt('введите сумму оплаты')
                alert('оплата прошла успешна')
                confirm('хотите распечатать чек')
            } else {
                alert('error')
            }
        } else {alert('error')}
    } else {
        alert('error')
    }
}