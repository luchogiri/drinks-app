// @flow

export default class Drink {

  id: string;
  name: string;
  picture: string;
  ingredients: [];
  instructions: string;


  constructor(data: Object = {}) {

    this.id = data.idDrink || '0';
    this.name = data.strDrink || '';
    this.picture = data.strDrinkThumb || '';
    this.ingredients = this.getIngredients(data);
    this.instructions = data.strInstructions || '';
  }

  getIngredients(data: Object = {}) {
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