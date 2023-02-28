import Assignment from "./Assignment.js";
import AssignmentCategories from "./AssignmentCategories.js";

export default {
  components: { Assignment, AssignmentCategories },
  template:
    /*html*/
    `<section v-show="assignments.length">
        <h2 class="font-bold mb-2 text-lg">
          {{ this.title }}
          ({{ filtedAssignments.length }})
        </h2>
        <assignment-categories 
          :initialCategories="this.assignments.map((a) => a.category)"
          :currentCategory="currentCategory"
          @change="ChangeCategory"
        >
        </assignment-categories>
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
