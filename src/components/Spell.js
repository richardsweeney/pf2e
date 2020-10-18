import React, { useState } from 'react';
import Modal from 'react-modal';
import SpellModal from './SpellModal';
import Dice from './Dice';

const modalStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, .7)'
  },
  content: {
    margin: '0 auto',
    maxWidth: '580px',
    left: 0,
    right: 0,
    border: 0,
    borderRadius: '5px',
    padding: '24px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  }
};

function Spell ({ spell }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className='rounded shadow bg-gray-100 p-4 cursor-pointer'
      >
        <h4 className='font-semibold text-2xl'>{spell.name}</h4>
        <div className='flex align-middle'>
          <Dice moves={spell.moves} />
          <span>{spell.range && `${spell.range} ft.`}</span>
        </div>
      </div>

      <Modal
        style={modalStyles}
        closeTimeoutMS={500}
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
