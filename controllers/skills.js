var Skill = require('../models/skill');

module.exports = {
  index,
  show,
  create,
  delete: deleteSkill
};

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}

function show(req, res) {
  res.render('/skills', {
    skill: Skill.getOne(req.params.id),
    skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
  });
}

function create(req, res) {
  Skill.create(req.body)
  res.redirect('/')
}

function deleteSkill() {
  console.log(luigi);
  Skill.deleteOne(req.params.id);
  res.redirect('/');
}
