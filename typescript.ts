interface Smartphone {
  credito: number;
  numeroChiamate: number;
  ricarica(ammontare: number): void;
  chiamata(minuti: number): void;
  chiama404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  credito: number = 0;
  numeroChiamate: number = 0;

  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
  }

  ricarica(ammontare: number): void {
    this.credito += ammontare;
  }

  chiamata(minuti: number): void {
    const costoChiamata = minuti * 0.20;
    if (this.credito >= costoChiamata) {
      this.credito -= costoChiamata;
      this.numeroChiamate += minuti;
    } else {
      console.log("Credito insufficiente per effettuare la chiamata.");
    }
  }

  chiama404(): number {
    return this.credito;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

//esempio
const utente = new User("Mario", "Rossi");
utente.ricarica(10); // Ricarica di 10 euro
utente.chiamata(5); // Effettua una chiamata di 5 minuti
console.log("Credito residuo:", utente.chiama404()); // Mostra il credito residuo
console.log("Numero di chiamate effettuate:", utente.getNumeroChiamate()); // Mostra il numero di chiamate effettuate
utente.azzeraChiamate(); // Azzera il numero di chiamate effettuate
