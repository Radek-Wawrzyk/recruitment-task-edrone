<template>
  <el-dialog :title="recipe.strMeal" :visible.sync="dialogVisible" class="dialog" :before-close="close">
    <div class="recipe">
      <div class="recipe-info">
        <h2 class="recipe-info-title">Instruction</h2>
        <p class="recipe-info-description">{{recipe.strInstructions}}</p>
        <ul class="recipe-info-list">
          <li class="recipe-info-list-item" v-for="(value, key) in recipe.ingredients" :key="key">
            {{}}
          </li>
        </ul>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">Cancel</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'OpenRecipe',
  props: [
    'id'
  ],
  data: () => ({
    dialogVisible: true
  }),
  computed: {
    recipe() {
      const recipe = this.$store.getters.openedRecipe(this.id)[0];

      //Delete blank objects
      for (const [key, value] of Object.entries(recipe)) {
        if (value === "") {
          delete recipe[key];
        }
      }

      //Search for ingredients keys
      const ingredientsKeys = Object.keys(recipe).filter(ingredient =>
        ingredient.includes("strIngredient")
      );

      console.log(ingredientsKeys);

      //Make array from ingredients and measures
      const ingredients = ingredientsKeys.reduce((reduced, itemKey) => {
        const itemIndex = itemKey.slice(13);

        reduced.push(Object.assign({}, {[recipe[itemKey]]: recipe['strMeasure' + itemIndex]}));
        return reduced;
      }, []);

      recipe.ingredients = ingredients;

      return recipe;
    }
  },
  methods: {
    close() {
      this.$router.go(-1);
    }
  }
};
</script>

<style src="./OpenRecipe.scss" scoped lang="scss" />