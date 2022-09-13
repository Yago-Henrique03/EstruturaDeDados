let vetor = [0, 3, 6, 9, 12, 15, 18, 21, 24]

function BinarySearch(vet, ini, fim,v){
    let meio
    if(ini > fim){
        return -1
    }
    else {
        meio = Math.floor((ini + fim) / 2);
        if(vet[meio] == v){
            return meio
        }
        else if(v < vet[meio]){
            return BinarySearch(vet, ini, meio-1,v);
        }
        else{
            return BinarySearch(vet,meio+1, fim, v);
        }

    }
}

console.log(BinarySearch(vetor, 0, vetor.length-1, 10))