import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template:
    /*html*/
    `<AssignmentList :assignments="inProgress" title="In Progress"></AssignmentList>
    <AssignmentList :assignments="done" title="Done"></AssignmentList>
    
    <form @submit.prevent="addAssignment" class="text-black">
      <input type="text" v-model="newAssignment" class="p-2" />
      <button type="submit" class="bg-white p-2 border-l border-gray-600 hover:bg-gray-300">Add</button>
    </form>
    
    `,
  data() {
    return {
      assignments: [
        {
          id: 1,
          name: "Go shopping",
          complete: false,
        },
        {
          id: 2,
          name: "Study Laravel",
          complete: false,
        },
        {
          id: 3,
          name: "Play with Sara",
          complete: false,
        },
      ],
      newAssignment: "",
    };
  },
  computed: {
    inProgress() {
      return this.assignments.filter((item) => !item.complete);
    },
    done() {
      return this.assignments.filter((item) => item.complete);
    },
  },
  methods: {
    addAssignment() {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: this.newAssignment,
        complete: false,
      });
      this.newAssignment = "";
    },
  },
};
