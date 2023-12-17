let columna1HTML = document.getElementsByClassName("columna")[0];
let columna2HTML = document.getElementsByClassName("columna")[1];
let columna3HTML = document.getElementsByClassName("columna")[2];
let ficha = document.getElementsByClassName("ficha")[0];
//console.log(columna1HTML.children); 
//console.log(ficha.children[0]);
//console.log(ficha.children);
//columna2.appendChild(columna1.children[9]);
//ficha.appendChild(columna1HTML.children[9]);
//columna2.innerHTML('<div class="discos disco9"></div>');

const fichasHTML = ['<div class="discos disco1"></div>',
                    '<div class="discos disco2"></div>',
                    '<div class="discos disco3"></div>',
                    '<div class="discos disco4"></div>',
                    '<div class="discos disco5"></div>',
                    '<div class="discos disco6"></div>',
                    '<div class="discos disco7"></div>',
                    '<div class="discos disco8"></div>',
                    '<div class="discos disco9"></div>',
                    '<div class="discos disco10"></div>'];


class Pila {
    constructor() {
        this.v = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        //this.v = new Array(10);
        this.cima = -1;
        this.tam = 10;
    }
    estaVacio() {
        return (this.cima == -1);
    }
    estaLlena() {
        return (this.cima == this.tam - 1);
    }
    insertar(x) {
        if (this.estaLlena())
            return false;
        this.cima++;
        this.v[this.cima] = x;
        return true;
    }
    extraer() {
        if (this.estaVacio())
            return -999;
        let aux = this.v[this.cima];
        this.cima--;
        return aux;
    }
    ultimoDato() {
        if (this.estaVacio())
            return -999;
        let aux = this.v[this.cima];
        return aux;
    }
    ver() {
        console.log(this.v.join(','));
    }
    obtenerPila() {
        return this.v.slice(0, this.cima + 1);
    }
}
class Juego {
    constructor() {
        this.columna1 = new Pila();
        this.columna2 = new Pila();
        this.columna3 = new Pila();
        this.disco = 0;
        this.estado = true;
        this.contador = 0;
        this.tamanno = 0;
    }
    iniciar(cantDiscos) {
        if (cantDiscos >= 3 && cantDiscos <= 10) {
            this.reiniciar();
            let divs = '';
            for (let i = cantDiscos; i > 0; i--) {
                this.columna1.insertar(i);
                 divs = divs + fichasHTML[i -1];
            }
            this.tamanno = cantDiscos;
            columna1HTML.innerHTML = divs;
            this.columna1.tam = cantDiscos;
            this.columna2.tam = cantDiscos;
            this.columna3.tam = cantDiscos;
            return this.columna1.obtenerPila();
        } else {
            alert('Elija un rango de 3 a 10');
        }
    }
    comprovar() {
        if (this.columna2.estaLlena()) {
            if(this.contador == (Math.pow(2,this.tamanno)-1)){
                window.location.href = './Victoria.html';
            }
            else if(this.contador <= (Math.pow(2,this.tamanno)+(this.tamanno*2))){
                window.location.href = './Victoria2.html';
            }
            else if(this.contador <= (Math.pow(2,this.tamanno)+(this.tamanno*4))){
                window.location.href = './Victoria3.html';
            }
            else{
                window.location.href = './Victoria4.html';
            }
        } else if (this.columna3.estaLlena()) {
            if(this.contador == (Math.pow(2,this.tamanno)-1)){
                window.location.href = './Victoria.html';
            }
            else if(this.contador <= (Math.pow(2,this.tamanno)+(this.tamanno*2))){
                window.location.href = './Victoria2.html';
            }
            else if(this.contador <= (Math.pow(2,this.tamanno)+(this.tamanno*4))){
                window.location.href = './Victoria3.html';
            }
            else{
                window.location.href = './Victoria4.html';
            }
        }
    }
    mostrarTablero() {
        return this.columna1.obtenerPila() + ' => ' +
            this.columna2.obtenerPila() + ' => ' +
            this.columna3.obtenerPila();
    }
    reiniciar() {
        columna1HTML.innerHTML = '';
        columna2HTML.innerHTML = '';
        columna3HTML.innerHTML = '';
        this.estado = true;
        this.disco = 0 ;
        ficha.innerHTML = '';
        this.columna1.cima = -1;
        this.columna2.cima = -1;
        this.columna3.cima = -1;
        this.contador = 0;
    }
    boton(columna) {
        switch (columna) {
            case 1:
                if (this.estado && !this.columna1.estaVacio()) {
                    this.disco = this.columna1.ultimoDato();
                    this.columna1.extraer();
                    ficha.appendChild(columna1HTML.children[this.columna1.cima + 1]);
                    this.estado = false;
                    //return this.disco + ' => '+ this.columna1.obtenerPila();
                } else if (!this.estado) {
                    if (this.columna1.estaVacio()) {
                        this.columna1.insertar(this.disco);
                        columna1HTML.appendChild(ficha.children[0]);
                        this.estado = true;
                        this.contador++;

                    } else if (this.disco < this.columna1.ultimoDato()) {
                        this.columna1.insertar(this.disco);
                        columna1HTML.appendChild(ficha.children[0]);
                        this.estado = true;
                        this.contador++;
                    } else {
                        console.log("case 1");
                    }
                    this.comprovar();
                    this.mostrarTablero();
                }
                break;
            case 2:
                if (this.estado && !this.columna2.estaVacio()) {
                    this.disco = this.columna2.ultimoDato();
                    this.columna2.extraer();
                    ficha.appendChild(columna2HTML.children[this.columna2.cima + 1]);
                    this.estado = false;
                    //return this.disco + ' => '+ this.columna2.obtenerPila();
                } else if (!this.estado) {
                    if (this.columna2.estaVacio()) {
                        this.columna2.insertar(this.disco);
                        columna2HTML.appendChild(ficha.children[0]);
                        this.estado = true;
                        this.contador++;
                    } else if (this.disco < this.columna2.ultimoDato()) {
                        this.columna2.insertar(this.disco);
                        columna2HTML.appendChild(ficha.children[0]);
                        this.estado = true;
                        this.contador++;
                    } else {
                        console.log("case 2");
                    }
                    this.comprovar();
                    this.mostrarTablero();
                }
                break;
            case 3:
                if (this.estado && !this.columna3.estaVacio()) {
                    this.disco = this.columna3.ultimoDato();
                    this.columna3.extraer();
                    this.estado = false;
                    ficha.appendChild(columna3HTML.children[this.columna3.cima + 1]);
                    //return this.disco + ' => '+ this.columna3.obtenerPila();
                } else if (!this.estado) {
                    if (this.columna3.estaVacio()) {
                        this.columna3.insertar(this.disco);
                        columna3HTML.appendChild(ficha.children[0]);
                        this.estado = true;
                        this.contador++;
                    } else if (this.disco < this.columna3.ultimoDato()) {
                        this.columna3.insertar(this.disco);
                        columna3HTML.appendChild(ficha.children[0]);
                        this.estado = true;
                        this.contador++;
                    } else {
                        console.log("case 3");
                    }
                    this.comprovar();
                    this.mostrarTablero();
                }
                break;
        }
        console.log(this.mostrarTablero());
        console.log(this.disco)
    }

}


const miJuego = new Juego();
const miPila = new Pila();
//miJuego.iniciar(3);