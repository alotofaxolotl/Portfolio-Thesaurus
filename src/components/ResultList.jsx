import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 30rem;
  margin: auto;
`;

const ListItem = styled.li`
  font: inherit;
  font-size: x-large;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const CenteredText = styled.h2`
  text-align: center;
`;

const ListContainer = styled.div`
  margin-bottom: 10rem;
`;

const ResultList = (props) => {
  return (
    <ListContainer>
      {props.words.length === 0 && (
        <CenteredText>No results.</CenteredText>
      )}
      <List>
        {props.words.slice(0, 10).map((word) => {
          return <ListItem>{word.word}</ListItem>;
        })}
        {props.showMore &&
          props.words.slice(10).map((word) => {
            return <ListItem>{word.word}</ListItem>;
          })}
      </List>
      {!props.showMore && props.words.length > 10 && (
        <ButtonContainer>
          <Button
            onClick={() => {
              props.onShowMore();
            }}
          >
            Show More
          </Button>
        </ButtonContainer>
      )}
    </ListContainer>
  );
};

export default ResultList;
