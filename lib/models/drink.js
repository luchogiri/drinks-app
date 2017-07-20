// @flow

export default class Drink {

  constructor(data = {}) {

    this.id = data.idDrink || 0;
    this.name = data.strDrink || '';
    this.picture = data.strDrinkThumb || '';
    this.ingredients = this.getIngredients(data);
    this.instructions = data.strInstructions || '';
  }

  getIngredients(data = {}) {
    const ingredientsCount = 15;
    let response = [];
    for (let i = 1; i <= ingredientsCount; i++) {
      if ( data[`strIngredient${i}`] ) {
        response.push({
          name: data[`strIngredient${i}`],
          measure: data[`strMeasure${i}`]
        })
      }
    }
    return response;
  }
}