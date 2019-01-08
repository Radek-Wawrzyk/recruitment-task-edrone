<template>
  <el-dialog
    :title="recipe.strMeal"
    :visible.sync="dialogVisible"
    class="dialog"
    :before-close="close"
    style="width: 100%;"
  >
    <div class="recipe">
      <div class="recipe-info">
        <h2 class="recipe-info-title">Instruction</h2>
        <p class="recipe-info-description">{{recipe.strInstructions}}</p>
        <h3 class="recipe-info-title">Ingredients + Measure</h3>
        <ul class="recipe-info-list">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ingredient.name}} - {{ingredient.value || 'More or less'}}</li>
        </ul>
        <youtube :video-id="recipe.youTubeId" v-if="recipe.youTubeId"></youtube>
        <p v-else class="no-results">There is no video...</p>
        <footer class="recipe-info-link" v-if="recipe.strSource">
          <a
            :href="recipe.strSource"
            :aria-label="recipe.strMeal"
            :title="recipe.strMeal"
          >Source: {{recipe.strSource}}</a>
        </footer>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">Cancel</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "OpenRecipe",
  props: ["id"],
  data: () => ({
    dialogVisible: true
  }),
  computed: {
    recipe() {
      const recipe = this.$store.getters.openedRecipe(this.id)[0];

      //Delete blank objectsa 
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

        reduced.push(
          Object.assign(
            {},
            { name: recipe[itemKey], value : recipe["strMeasure" + itemIndex] }
          )
        );
        return reduced;
      }, []);

      Object.assign(recipe, { ingredients });

      console.log(recipe.ingredients);

      //Get YouTube movie ID

      if (recipe.strYoutube) {
        const splitString = recipe.strYoutube.split("watch?v=");
        const id = splitString[1];
        
        recipe.youTubeId = id;
      }

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

<style src="./OpenRecipe.scss" lang="scss" />