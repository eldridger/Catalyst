import React, {Component} from 'react';
import GameSelector from './GameSelector';
import FindScrim from './FindScrim';
import PlayOptions from './PlayOptions';
import PlayContainer from './PlayContainer';
import HostScrim from './HostScrim';

export default {
    path: 'play',

    component: PlayContainer,
    indexRoute: {component: GameSelector.component},
    childRoutes: [ GameSelector, PlayOptions, FindScrim, HostScrim ]
}