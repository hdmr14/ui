import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Search from '../Search/';
import Logo from '../Logo';

import { LeftSide, SearchWrapper } from './styles';

interface Props {
  withoutSearch?: boolean;
}

const StyledLink = styled(Link)({
  marginRight: '1em',
});

const HeaderLeft: React.FC<Props> = ({ withoutSearch = false }) => (
  <LeftSide>
    <StyledLink to={'/'}>
      <Logo />
    </StyledLink>
    {!withoutSearch && (
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    )}
  </LeftSide>
);

export default HeaderLeft;
