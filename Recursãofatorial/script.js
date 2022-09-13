function potencia(base, expo){
    if(expo == 0){
        return 1
    }
    else{
        return ( base * potencia(base, expo-1))
    }
}

let result = potencia(5, 2)
document.write(result)