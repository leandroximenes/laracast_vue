export default {
  template: /*html*/ `
    <div class="space-x-1 my-2">
        <button 
            class="px-2 border rounded" 
            :class="{'border-blue-400 text-blue-400' : category === this.currentCategory}"
            v-for="category in allCategories" 
            @click="$emit('change', category)"
        >
        {{ category }}
        </button>
    </div>`,
  props: {
    initialCategories: Array,
    currentCategory: String,
  },
  computed: {
    allCategories() {
      return ["All", ...new Set(this.initialCategories)];
    },
  },
};
