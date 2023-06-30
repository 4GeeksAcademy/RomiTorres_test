const { sum ,fromEuroToDollar,  fromDollarToYen,fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.6 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(5);
    const expected = 5 * 106.6;
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(5)).toBe(533); //
})

test("One yen should be 0.006 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    const yen = fromYenToPound(100);
    const expected = 100 * 0.006
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(100)).toBe(0.6); //
})