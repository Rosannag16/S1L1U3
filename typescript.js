var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = nome;
        this.cognome = cognome;
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
    };
    User.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 0.20;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    };
    User.prototype.chiama404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
//esempio
var utente = new User("Mario", "Rossi");
utente.ricarica(10); // Ricarica di 10 euro
utente.chiamata(5); // Effettua una chiamata di 5 minuti
console.log("Credito residuo:", utente.chiama404()); // Mostra il credito residuo
console.log("Numero di chiamate effettuate:", utente.getNumeroChiamate()); // Mostra il numero di chiamate effettuate
utente.azzeraChiamate(); // Azzera il numero di chiamate effettuate
