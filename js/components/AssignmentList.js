import Assignment from "./Assignment.js";

export default {
  components: { Assignment },
  template:
    /*html*/
    `<section v-show="assignments.length">
        <h2 class="font-bold mb-2">{{ this.title }}</h2>
          <ul class="border border-gray-200 divide-y divide-y-gray-600">
            <Assignment v-for="item in assignments" :key="item.id" :assignment="item"></Assignment>
          </ul>
    </section>`,
  props: {
    assignments: Array,
    title: String,
  },
};
