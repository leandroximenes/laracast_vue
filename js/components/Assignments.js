import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template:
    /*html*/
    `<AssignmentList :assignments="inProgress" title="In Progress"></AssignmentList>
    <AssignmentList :assignments="done" title="Done"></AssignmentList>`,
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
};
