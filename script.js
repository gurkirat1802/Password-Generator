function copyToClipboard() {
    var input = document.getElementById('psw')
    input.select()
    document.execCommand("copy");
    alert('Password copied to clipboard!')
}

upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
lowerCase = 'abcdefghijklmnopqrstuvwxyz'
numberSet = '0123456789'
symbolSet = '!@#$%^&*()_+-={}[]|\\:;"<>,.?/~`'

function generate_password() {
    // console.log('Hello')
    psw_len = document.getElementById('length').value, console.log(psw_len)
    upper = document.getElementById('upper').checked
    lower = document.getElementById('lower').checked
    number = document.getElementById('number').checked
    symbol = document.getElementById('symbol').checked
    psw = document.getElementById('psw')

    var charsets = []

    if(upper) charsets.push(upperCase), console.log("up")
    if(lower) charsets.push(lowerCase), console.log("lo")
    if(number) charsets.push(numberSet), console.log("nu")
    if(symbol) charsets.push(symbolSet), console.log("sy")

    if(!upper && !lower && !number && !symbol) {
        alert("Mark atleast one check box!")
        exit()
    } 


    var password = ''

    for(var i=0;i<psw_len;i++) {
        var charset = charsets[Math.floor(Math.random() * charsets.length)]
        password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    console.log(password)

    psw.value = password
}