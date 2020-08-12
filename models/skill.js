const skills = [];

module.exports = {
  getAll,
  getOne,
  create,
  killASkill
};

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
  return skills;
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  console.log(skill)
  skills.push(skill)
}

function killASkill(id) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id))
  skills.splice(idx, 1);
}