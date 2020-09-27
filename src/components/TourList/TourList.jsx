import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import './tourlist.scss';
import { tourData } from '../../tourData';

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  render() {
    return (
      <div>
        Hello from the TourList
        <Tour />
      </div>
    );
  }
}
