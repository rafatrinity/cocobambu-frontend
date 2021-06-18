export class Receita {
    nome: string = '';
    desc: string = '';
    ingredientes: Array<string> = [];
    preparo: Preparo = new Preparo();
    image: Image = new Image;
}

class Preparo {
    tempo: string = '';
    passos: Array<string> = [];
}

class Image {
    thumb: string = '';
    foto: string = '';
}
