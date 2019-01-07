<template>
  <el-dialog :title="recipe.strMeal" :visible.sync="dialogVisible" class="dialog" :before-close="close">
    <div class="recipe">
      <div class="recipe-info">
        <h2 class="recipe-info-title">Instruction</h2>
        <p class="recipe-info-description">{{recipe.strInstructions}}</p>
        <ul class="recipe-info-list">
          <li class="recipe-info-list-item">

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
      return recipe;

     
    }
  },
  methods: {
    close() {
      this.$router.go(-1);
    }
  },
  created() {
    const recipe = this.recipe;

    for (const [key, value] of Object.entries(recipe)) {
      if (value === "") {
        delete recipe[key];
      }
    } 

    console.log(recipe);
  }
};
</script>

<style src="./OpenRecipe.scss" scoped lang="scss" />