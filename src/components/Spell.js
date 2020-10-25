import React, { useState } from 'react';
import Modal from './Modal';
import SpellModal from './SpellModal';
import Dice from './Dice';

function Spell ({ spell }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className='rounded shadow bg-gray-100 p-4 mb-4 md:mb-0 cursor-pointer'
      >
        <h4 className='font-semibold text-2xl pb-1'>{spell.name}</h4>
        <div className='flex align-middle'>
          <Dice moves={spell.moves} />
          <span>{spell.range && `${spell.range} ft.`}</span>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <SpellModal
          spell={spell}
          closeModal={() => setIsOpen(false)}
        />
      </Modal>
    </>
  );
}

export default Spell;
