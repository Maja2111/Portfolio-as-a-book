const _vqack083y5 = require('../dictionary/nextButton.json');
const _oc3706zbwh = require('../dictionary/pageOne.json');

const dictionaries = {
  "nextButton": _vqack083y5,
  "pageOne": _oc3706zbwh
};
const getDictionaries = () => dictionaries;

module.exports = { ...dictionaries, getDictionaries };
