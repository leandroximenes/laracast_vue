import Assignment from "./Assignment.js";

export default {
  components: { Assignment },
  template:
    /*html*/
    `<section v-show="assignments.length">
        <h2 class="font-bold mb-2 text-lg">
          {{ this.title }}
          ({{ filtedAssignments.length }})
        </h2>
        <div class="space-x-1 my-2">
          <button 
            class="px-2 border rounded" 
            :class="{'border-blue-400 text-blue-400' : category === this.currentCategory}"
            v-for="category in categories" 
            @click="ChangeCategory(category)"
          >
            {{ category }}
          </button>
        </div>
        <ul class="border border-gray-200 divide-y divide-y-gray-600">
          <Assignment v-for="item in filtedAssignments" :key="item.id" :assignment="item"></Assignment>
        </ul>
    </section>`,
  props: {
    assignments: Array,
    title: String,
  },
  data() {
    return {
      currentCategory: "All",
    };
  },
  computed: {
    categories() {
      return ["All", ...new Set(this.assignments.map((a) => a.category))];
    },
    filtedAssignments() {
      if (this.currentCategory === "All") {
        return this.assignments;
      }
      return this.assignments.filter(
        (a) => a.category === this.currentCategory
      );
    },
  },
  methods: {
    ChangeCategory: function (category) {
      this.currentCategory = category;
    },
  },
};
