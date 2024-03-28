import React from 'react';
import styles from "./CardList.module.css";
import { Card } from '../Card/Card';
import {PopupCard} from "../PopupCard/PopupCard"

export function CardList(): JSX.Element {
  return (
    <div><h2>
    Card List</h2><Card/><PopupCard/></div>
  );
}
