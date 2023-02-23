export default {
  template:
    /*html*/
    `<li>
        <label class="p-2 flex justify-between">
            {{ assignment.name }}
            <input class="ml-3" type="checkbox" v-model="assignment.complete">
        </label>
    </li>`,
  props: {
    assignment: Object,
  },
};
