// src/types/GameState.ts

export interface Card {
  value: number | string;
  suit: string;
}

export interface GameState {
  playerHand: Card[];
  dealerHand: Card[];
  playerBalance: number;
  dealerBalance: number;
  result: string;
}
