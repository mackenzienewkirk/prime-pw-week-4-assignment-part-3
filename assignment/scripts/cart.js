console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem( item ){
    console.log( 'in addItem', item);
    basket.push( item );
// Return true if added to basket array
    return true;
}

addItem( 'apple');
addItem( 'banana');
addItem( 'mango');

console.log(basket);

function listItems( basket ){
    for( i=0; i<basket.length; i++){
        console.log( 'for loop', basket[i]);
    }
}
console.log(listItems (basket) );

function empty( basket ){
    basket.splice(0,basket.length);
    return basket;
}
console.log(empty;