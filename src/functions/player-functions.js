function getPlayer (id) {
  const { data: players } = require('../data/players.json');
  const player = players.find(player => player.id === id);
  const keyModifier = player.abilityScores.modifiers[player.modifier];
  const dict = {
    T: 2,
    E: 4,
    M: 6,
    L: 8
  };

  function getProficiencyBonus (modifier = null) {
    if (!modifier) {
      return player.level;
    }

    return player.level + dict[modifier];
  }

  function getHP () {
    return keyModifier + player.HP + (player.HP * player.level);
  }

  function getSpells () {
    const { data: spells } = require('../data/spells.json');

    return spells.filter(({ id }) => player.spells.includes(id));
  }

  function getSpellLevels () {
    const levels = getSpells().map(({ level }) => level);

    return Array.from(new Set(levels));
  }

  function getCantrips () {
    const { data: cantrips } = require('../data/cantrips.json');

    return cantrips.filter(({ id }) => player.cantrips.includes(id));
  }

  function getSkills () {
    const { data: skills } = require('../data/skills.json');

    return skills.map(({ name, modifier }) => {

      const trained = player.skills[name];
      const points = (trained)
        ? `<strong>+${calculateSkillPoints(trained, modifier)}</strong> (${trained})` : 'Untrained';

      return {
        name,
        modifier,
        trained: trained || '',
        points
      };
    });
  }

  function calculateSkillPoints (trained, modifier) {
    return player.abilityScores.modifiers[modifier] + getProficiencyBonus(trained);
  }

  function getPerception () {
    return player.abilityScores.modifiers.Wisdom + getProficiencyBonus('T');
  }

  function getClassDC () {
    return keyModifier + getProficiencyBonus('T') + 10;
  }

  function getArmourClass () {
    return player.abilityScores.modifiers.Dexterity + getProficiencyBonus('T') + 10;
  }

  function getSpellAttackRoll () {
    return keyModifier + getProficiencyBonus(player.spellAttackRoll);
  }

  function getSpellDC () {
    return keyModifier + getProficiencyBonus(player.spellDC) + 10;
  }

  function getSavingThrows () {
    const { modifiers } = player.abilityScores;
    const { savingThrows } = player;

    return {
      fortitude: modifiers.Constitution + getProficiencyBonus(savingThrows.fortitude),
      reflex: modifiers.Dexterity + getProficiencyBonus(savingThrows.reflex),
      will: modifiers.Wisdom + getProficiencyBonus(savingThrows.will)
    };
  }

  return {
    ...player,
    spells: getSpells(),
    spellLevels: getSpellLevels(),
    cantrips: getCantrips(),
    perception: getPerception(),
    HP: getHP(),
    DC: getClassDC(),
    AC: getArmourClass(),
    savingThrows: getSavingThrows(),
    spellAttackRoll: getSpellAttackRoll(),
    spellDC: getSpellDC(),
    skills: getSkills()
  };
}

export default getPlayer;
