const Result = [
  { a: 'Pierre', b: 'Feuille', c: 'Feuille recouvre Pierre' },
  { a: 'Pierre', b: 'Ciseaux', c: 'Pierre émousse Ciseaux' },
  { a: 'Pierre', b: 'Lézard', c: 'Pierre écrase Lézard' },
  { a: 'Pierre', b: 'Spock', c: 'Spock vaporise Pierre' },
  { a: 'Feuille', b: 'Ciseaux', c: 'Ciseaux coupe Feuille' },
  { a: 'Feuille', b: 'Lézard', c: 'Lézard mange Feuille' },
  { a: 'Feuille', b: 'Spock', c: 'Feuille discrédite Spock' },
  { a: 'Ciseaux', b: 'Lézard', c: 'Ciseaux décapite Lézard' },
  { a: 'Ciseaux', b: 'Spock', c: 'Spock casse Ciseaux' },
  { a: 'Lézard', b: 'Spock', c: 'Lézard poison Spock' },
];

export class GestureModel {

  name: string;
  selected: boolean;
  visible: boolean;

  constructor(name?: string, selected = false) {
    if (name) {
      this.name = name;
    }
    this.selected = selected;
    this.visible = false;
  }

  result(gesture: GestureModel) {
    return this.name === gesture.name ? 'Égalité' :
      Result.find(e => e.a === this.name && e.b === gesture.name
        || e.a === gesture.name && e.b === this.name).c;
  }

}

