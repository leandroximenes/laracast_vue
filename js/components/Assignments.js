import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  template: /*html*/ `
    <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="done" title="Done"></assignment-list>
    <assignment-create @add="addAssignment"></assignment-create>
    `,
  data() {
    return {
      assignments: [
        {
          id: 1,
          name: "Go shopping",
          complete: false,
          category: "math",
        },
        {
          id: 2,
          name: "Study Laravel",
          complete: false,
          category: "math",
        },
        {
          id: 3,
          name: "Play with Sara",
          complete: false,
          category: "science",
        },
      ],
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
    addAssignment(name) {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: name,
        complete: false,
      });
    },
  },
};
