function skillsMember(name, age, skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.getSkills = function () {
        return this.skills;
    };
}