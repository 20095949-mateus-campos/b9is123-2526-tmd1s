function listEuler1(a, b, l) {
    sum = l.
        filter(x => x % a == 0 || x % b == 0).
        reduce((sum, x) => sum + x, 0)

    alert(`The sum of all the multiples of ${a} or ${b} in ${l.slice(0, l.length-1).join(", ") + " and " + l[l.length-1]} is ${sum}.`)
}

function listEuler2(a, l) {
    inputAEx3B.value = a
    listEuler3(a, l)
}

function listEuler3(a, l) {
    sum = a.
        map(x => l.filter(y => y % x == 0)).
        flat().
        reduce((sum, x) => sum + x, 0)

    alert(`The sum of all the numbers in ${l.slice(0, l.length-1).join(", ") + " and " + l[l.length-1]} that are multiples of numbers in ${a.slice(0, a.length-1).join(", ") + " and " + a[a.length-1]} is ${sum}.`)
}
