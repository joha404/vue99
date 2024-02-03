var app = Vue.createApp({
  data() {
    return {
      // count: 0,
      // name: "",
      skills: [
        {
          name: "joy",
          age: 24,
        },
      ],
      newskill: { name: "", age: 0 },
    };
  },

  methods: {
    // mouse event pass start
    // inc(amount) {
    //   this.count = this.count + amount;
    // },
    // decn(amount) {
    //   this.count = this.count - amount;
    // },
    // test(ev) {
    //   console.log("test");
    //   console.log(ev);
    // },
    // mouse event pass end
    // joha(ev) {
    //   console.log();
    //   this.name = ev.target.value;
    // },

    addskill() {
      this.skills.push(this.newskill);
      this.newskill = {};
    },
    removeSkill(i) {
      this.skills.splice(i, 1);
    },
  },
});

app.mount("#app");
