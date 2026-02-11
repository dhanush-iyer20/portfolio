import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Card from '../../../Components/Card.jsx';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    isSnippet: true,
});
