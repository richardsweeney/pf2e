import React, { useContext } from 'react';
import { store } from '../stores/PlayerContext';
import Property from './Property';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PlayerSelector from './PlayerSelector';
import SpellsTab from './SpellsTab';

function Player () {
  const {
    state: {
      player
    }
  } = useContext(store);

  if (!player) {
    return (
      <PlayerSelector/>
    );
  }

  const properties = {
    Level: player.level,
    Class: player.class,
    'Class DC': player.DC,
    'Spell DC': player.spellDC,
    'Spell Attack Roll': player.spellAttackRoll,
    'Armor Class': player.AC,
    Perception: player.perception
  };

  const abilityScores = {
    scores: {
      Strength: player.abilityScores.scores.strength,
      Dexterity: player.abilityScores.scores.dexterity,
      Constitution: player.abilityScores.scores.constitution,
      Intelligence: player.abilityScores.scores.intelligence,
      Wisdom: player.abilityScores.scores.wisdom,
      Charisma: player.abilityScores.scores.charisma
    },
    modifiers: {
      Strength: player.abilityScores.modifiers.strength,
      Dexterity: player.abilityScores.modifiers.dexterity,
      Constitution: player.abilityScores.modifiers.constitution,
      Intelligence: player.abilityScores.modifiers.intelligence,
      Wisdom: player.abilityScores.modifiers.wisdom,
      Charisma: player.abilityScores.modifiers.charisma
    }
  };

  const savingThrows = {
    'Fortitude Save': player.savingThrows.fortitude,
    'Reflex Save': player.savingThrows.reflex,
    'Will Save': player.savingThrows.will
  };

  return (
    <div className='player'>
      <div className='flex p-4 rounded-t bg-gray-700 text-white shadow-inner' style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className='text-4xl'>{player.name}</h2>
        <img className='h-20 w-20 rounded-full object-fill' src={player.image} alt={player.name}/>
      </div>

      <div className='p-4'>
        <p className='text-2xl mb-6 mt-2'>HP: {player.HP}/{player.HP}</p>

        <Tabs>
          <TabList>
            <Tab>General</Tab>
            <Tab>Spells</Tab>
            <Tab>Skills</Tab>
          </TabList>
          <TabPanel>
            <div className='p-2'>
              <h3 className='font-semibold text-3xl mb-4'>General</h3>

              <div className='flex'>
                <div className='w-1/2'>
                  <h4 className='font-semibold text-2xl mb-2'>Miscellaneous</h4>
                  {Object.entries(properties).map(([label, value], index) => (
                    <Property key={index} label={label} value={value}/>
                  ))}

                  <h4 className='font-semibold text-2xl mb-2 mt-6'>Saving Throws</h4>
                  {Object.entries(savingThrows).map(([label, value], index) => (
                    <Property key={index} label={label} value={value}/>
                  ))}
                </div>
                <div className='w-1/2'>
                  <h4 className='font-semibold text-2xl mb-2'>Ability Modifiers</h4>
                  {Object.entries(abilityScores.modifiers).map(([label, value], index) => (
                    <Property key={index} label={label} value={value}/>
                  ))}

                  <h4 className='font-semibold text-2xl mb-2 mt-6'>Ability Scores</h4>
                  {Object.entries(abilityScores.scores).map(([label, value], index) => (
                    <Property key={index} label={label} value={value}/>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <SpellsTab/>
          </TabPanel>
          <TabPanel>
            <div className='p-2'>
              <h3 className='font-semibold text-3xl mb-4'>Skills</h3>
              {player.skills.map(({ name, points }, index) => (
                <Property key={index} label={name} value={points}/>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Player;
