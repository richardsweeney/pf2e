import React from 'react';
import Property from './Property';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PlayerSelector from './PlayerSelector';
import SpellsTab from './SpellsTab';
import CantripsTab from './CantripsTab';
import HP from './HP';
import usePlayer from '../hooks/usePlayer';

function Player () {
  const { player } = usePlayer();
  if (!player) {
    return (
      <PlayerSelector/>
    );
  }

  const properties = {
    Level: player.level,
    HP: player.HP,
    Class: player.class,
    'Class DC': player.DC,
    'Spell DC': player.spellDC,
    'Spell Attack Roll': player.spellAttackRoll,
    'Armor Class': player.AC,
    Perception: player.perception
  };

  const { scores, modifiers } = player.abilityScores;
  const abilityScores = { scores, modifiers };
  const savingThrows = {
    'Fortitude Save': player.savingThrows.fortitude,
    'Reflex Save': player.savingThrows.reflex,
    'Will Save': player.savingThrows.will
  };

  return (
    <div className='player'>
      <div className='flex p-4 rounded-t bg-gray-700 text-white shadow-inner justify-between items-center'>
        <div className='flex items-center'>
          <h2 className='text-4xl mr-4'>{player.name}</h2>
          <HP/>
        </div>
        <img className='h-20 w-20 rounded-full object-fill' src={player.image} alt={player.name}/>
      </div>

      <div className='p-4'>
        <Tabs>
          <TabList>
            <Tab>General</Tab>
            <Tab>Spells</Tab>
            <Tab>Cantrips</Tab>
            <Tab>Skills</Tab>
          </TabList>
          <TabPanel>
            <div>
              <h3 className='font-semibold text-3xl mb-4'>General</h3>

              <div className='md:flex'>
                <div className='md:w-1/2 md:mr-3 mb-8'>
                  <h4 className='font-semibold text-2xl mb-2'>Miscellaneous</h4>
                  {Object.entries(properties).map(([label, value], index) => (
                    <Property key={index} label={label} value={value}/>
                  ))}
                </div>
                <div className='md:w-1/2 mb-8'>
                  <h4 className='font-semibold text-2xl mb-2'>Ability Modifiers</h4>
                  {Object.entries(abilityScores.modifiers).map(([label, value], index) => (
                    <Property key={index} label={label} value={value}/>
                  ))}
                </div>
              </div>
              <div className='md:flex'>
                <div className='md:w-1/2 md:mr-3 mb-8'>
                  <h4 className='font-semibold text-2xl mb-2'>Saving Throws</h4>
                  {Object.entries(savingThrows).map(([label, value], index) => (
                    <Property key={index} label={label} value={value}/>
                  ))}
                </div>
                <div className='md:w-1/2'>
                  <h4 className='font-semibold text-2xl mb-2'>Ability Scores</h4>
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
            <CantripsTab/>
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
