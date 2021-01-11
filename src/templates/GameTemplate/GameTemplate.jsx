import React, { useState, useEffect, useReducer } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import uniqueRandomNumber from '../../utils/uniqueRandomNumber';
import API from '../../utils/API';

import CardBox from '../../components/CardBox/CardBox';

const GameTemplate = ({ attribute, variant, getFunction }) => {
  const [fullData, setFullData] = useState(null);
  const [firstElement, setFirstElement] = useState(null);
  const [secondElement, setSecondElement] = useState(null);
  const [result, setResult] = useState(null);
  const [resultText, setResultText] = useState('vs');
  const [count, setCount] = useState(null);
  const [scores, setScores] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {},
  );

  const getWinner = () => {
    const firstElementAttribute = firstElement[attribute].replace(',', '');
    const secondElementAttribute = secondElement[attribute].replace(',', '');
    if (firstElementAttribute === 'unknown' || secondElementAttribute === 'unknown') {
      setResult(0);
      setResultText('Unknown');
    } else if (Number(firstElementAttribute) > Number(secondElementAttribute)) {
      setResult(1);
      setResultText('Left wins!');
      setScores({ [firstElement.name]: scores[firstElement.name] ? scores[firstElement.name] + 1 : 1 });
    } else if (Number(secondElementAttribute) > Number(firstElementAttribute)) {
      setResult(2);
      setResultText('Right wins!');
      setScores({ [secondElement.name]: scores[secondElement.name] ? scores[secondElement.name] + 1 : 1 });
    } else {
      setResult(0);
      setResultText('Draw');
    }
  };

  const playRandomGame = (data, elementsNumber) => {
    const firstRandomNumber = uniqueRandomNumber(elementsNumber, null);
    const secondRandomNumber = uniqueRandomNumber(elementsNumber, firstRandomNumber);
    setFirstElement(data[firstRandomNumber]);
    setSecondElement(data[secondRandomNumber]);
  };

  const getFullData = async () => {
    let elements = [];
    let dataPages = 1;
    let dataLength;
    for(let i = 1; i <= dataPages; i++) {
      try {
        const resp = await API[getFunction](i);
        dataLength = resp.count;
        dataPages = Math.ceil(resp.count/10);
        resp.results.forEach(person => {
            elements.push(person)
        })
      } catch (error) {
        return error
      }
    }
    playRandomGame(elements, dataLength);
    setFullData(elements);
    setCount(dataLength);
  };

  useEffect(() => {
    getFullData();
  }, []);

  useEffect(() => {
    if (firstElement && secondElement) {
      getWinner();
    } else {
      setResult(null);
      setResultText('vs');
    }
  }, [firstElement, secondElement]);

  return (
    <>
      {fullData ? (
        <>
          <Box display="flex" justifyContent="space-around" alignItems="center" height="40vh">
            <CardBox
              variant={variant}
              data={firstElement}
              score={scores[firstElement.name]}
              result={result !== 0 && (result === 1 ? 'win' : 'loss')}
              setItem={setFirstElement}
            />
            <Typography variant="h4" component="h2" margin="10">{resultText}</Typography>
            <CardBox
              variant={variant}
              data={secondElement}
              score={scores[secondElement.name]}
              result={result !== 0 && (result === 2 ? 'win' : 'loss')}
              setItem={setSecondElement}
            />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button onClick={() => playRandomGame(fullData, count)} variant="contained" color="primary" size="large">Play random game again</Button>
          </Box>
        </>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><CircularProgress/></Box>
      )}
    </>
  );
};

export default GameTemplate;
