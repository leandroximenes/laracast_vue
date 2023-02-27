export default {
  template: /*html*/ `
    <form @submit.prevent="addAssignment" class="text-black">
      <input type="text" v-model="newAssignment" class="p-2" />
      <button type="submit" class="bg-white p-2 border-l border-gray-600 hover:bg-gray-300">Add</button>
    </form>
    `,
  data() {
    return {
      newAssignment: "",
    };
  },
  methods: {
    addAssignment() {
      this.$emit("add", this.newAssignment);
      this.newAssignment = "";
    },
  },
};
