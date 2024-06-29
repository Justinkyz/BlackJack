// src/types/GameState.ts
export interface Card {
  value: number;
  suit: string;
}

export interface GameState {
  playerHand: Card[];
  dealerHand: Card[];
  // Weitere Eigenschaften des Spielzustands hinzufügen, falls vorhanden
}

