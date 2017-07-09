// @flow

const BASE = 'http://www.thecocktaildb.com/api/json/v1/1';


export default class API {

  static async Retrieve() {

    const now = +new Date;
    console.log('[service:drinks] Retrieve drinks');
    let url = `${BASE}/search.php?s=cocktail`;
    let xhr = await fetch(url);
    console.log(`[service:drinks] Retrieve finished. took:${+new Date - now}ms`);
    return await xhr.json();
  }
}



//   Search cocktail by name
//   http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
//
//   Search ingredient by name
//   http://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
//
//   Lookup full cocktail details by id
//   http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15112
//
//   Lookup a random cocktail
//   http://www.thecocktaildb.com/api/json/v1/1/random.php
//
//   Search by ingredient
//   http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
//   http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka
//
//   Search by alcoholic?
//   http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
//   http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
//
//   Filter by Category
//   http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
//   http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
//
//   Filter by Glass
//   http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
//   http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute
//
//   List the categories, glasses, ingredients or alcoholic filters
//   http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
//   http://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
//   http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
//   http://www.thecocktaildb.com/api/json/v1/1/list.php?a=list