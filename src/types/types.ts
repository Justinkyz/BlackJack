// src/types.ts
export interface Card {
  value: string;
  suit: string;
}

export interface GameState {
  playerHand: Card[];
  dealerHand: Card[];
  status: string;
}
