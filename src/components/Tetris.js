import React from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import { createStage } from '../gameHelpers'
import { StyledTetris, StyledTetrisWrapper} from './styles/StyledTetris'

const Tetris = () => {


    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                <Display text="SCORE" />
                <Display text="ROWS" />
                <Display text="LEVEL" />
                </div>
                <StartButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
  );
};

export default Tetris;
