import type { UnwrapRef } from 'vue'

export interface Card {
  suit: string;
  rank: string;
}

export interface GameState {
  playerHand: Card[];
  dealerHand: Card[];
  playerBalance: number;
  dealerBalance: number;
  status: string;
  result: string;
}
