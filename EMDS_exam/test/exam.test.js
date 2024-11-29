import { expect } from 'chai';
import * as exam from '../exam.js';

describe('Pruebas de funciones con variables simuladas', () => {
    describe('cubo', () => {
        it('debería elevar un número positivo al cubo', async () => {
            const resultado = await exam.cubo(3);
            expect(resultado).to.equal(27);
        });

        it('debería elevar un número negativo al cubo', async () => {
            const resultado = await exam.cubo(-2);
            expect(resultado).to.equal(-8);
        });
    });

    describe('esImpar', () => {
        it('debería devolver true para un número impar', async () => {
            const resultado = await exam.esImpar(5);
            expect(resultado).to.be.true;
        });

        it('debería devolver false para un número par', async () => {
            const resultado = await exam.esImpar(4);
            expect(resultado).to.be.false;
        });
    });

    describe('obtenerUltimoElemento', () => {
        it('debería devolver el penúltimo elemento de un arreglo', async () => {
            const resultado = await exam.getPenultimoElemento([1, 2, 3, 4, 5]);
            expect(resultado).to.equal(4);
        });

        it('debería devolver null si el arreglo tiene menos de 2 elementos', async () => {
            const resultado = await exam.getPenultimoElemento([1]);
            expect(resultado).to.be.null;
        });

        it('debería devolver null si el arreglo tiene más de 6 elementos', async () => {
            const resultado = await exam.getPenultimoElemento([1, 2, 3, 4, 5, 6, 7]);
            expect(resultado).to.be.null;
        });
    });

    describe('FormatoTitulo', () => {
        it('debería convertir una cadena en minúsculas a formato título', async () => {
            const resultado = await exam.aFormatoTitulo('hola mundo');
            expect(resultado).to.equal('Hola Mundo');
        });

        it('debería convertir una cadena con mezcla de mayúsculas y minúsculas a formato título', async () => {
            const resultado = await exam.aFormatoTitulo('HOLA MuNdO');
            expect(resultado).to.equal('Hola Mundo');
        });
    });

    describe('FiltrarImpares', () => {
        it('debería devolver un arreglo con números impares', async () => {
            const resultado = await exam.filtrarImpares([1, 2, 3, 4, 5]);
            expect(resultado).to.deep.equal([1, 3, 5]);
        });

        it('debería devolver un mensaje si no hay números impares en el arreglo', async () => {
            const resultado = await exam.filtrarImpares([2, 4, 6]);
            expect(resultado).to.equal('No hay números impares en el arreglo.');
        });

        it('debería devolver null si el arreglo está vacío', async () => {
            const resultado = await exam.filtrarImpares([]);
            expect(resultado).to.be.null;
        });
    });
});
