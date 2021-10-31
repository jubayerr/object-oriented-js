// object

const container = document.getElementById("container");

const person = {
  fname: "Jonas",
  lname: "Kahnwald",
  age: 24,
  fullName: function () {
    return this.fname + " " + this.lname;
  },
};

container.innerHTML = person.fullName();

console.log(person.fullName());

// ... end
