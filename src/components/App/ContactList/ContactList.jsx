import PropTypes from 'prop-types';

import { ContactContainer } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactContainer>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </ContactContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
