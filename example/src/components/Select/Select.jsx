import React, { useState } from 'react';

import {
  Col, Select, SearchableSelect,
} from '@dataesr/react-dsfr';
import DEPARTEMENTS from './departments';

const options = [
  {
    value: '', label: '- Select -', disabled: true, hidden: true,
  },
  { value: '1', label: 'Burgers & sandwiches' },
  { value: '2', label: 'Build your own', disabled: true },
  { value: '3', label: 'Friendly meals' },
  { value: '4', label: 'Save menu & more' },
];

const SelectExample = () => {
  const [selectValue1, setSelectValue1] = useState('');
  const [selectValue2, setSelectValue2] = useState('');
  const [department, setDepartment] = useState('5');
  return (
    <Col>
      <Select
        label="Label pour liste déroulante"
        selected={selectValue1}
        onChange={(e) => { setSelectValue1(e.target.value); }}
        options={options}
      />
      <Select
        label="Label pour liste déroulante"
        options={options}
        selected={selectValue2}
        onChange={(e) => { setSelectValue2(e.target.value); }}
        message="Texte d'erreur obligatoire"
        messageType="error"
      />
      <SearchableSelect
        label="Select avec recherche"
        hint={(
          <span>
            Vous pouvez trouvé la liste des département
            {' '}
            <a href="https://fr.wikipedia.org/wiki/Liste_des_d%C3%A9partements_fran%C3%A7ais">ici</a>
          </span>
)}
        selected={department}
        onChange={setDepartment}
        options={DEPARTEMENTS.map((departement, i) => ({
          value: i.toString(),
          label: departement,
          disabled: i % 15 === 0,
        }))}
      />
    </Col>
  );
};

export default SelectExample;
