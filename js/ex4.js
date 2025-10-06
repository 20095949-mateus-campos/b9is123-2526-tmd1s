function listEuler4(a, l) {
    sum = a.
        map(x => l.filter(y => y % x == 0)).
        flat().
        reduce((sum, x) => sum + x, 0)

    alert(`${sum} : ${a.join(" ")} : ${l.join(" ")}`)
}
