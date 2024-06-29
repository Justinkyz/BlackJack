import type { UnwrapRef } from 'vue'

export interface Card {
  suit: string;
  rank: string;
}

export interface GameState {
  data: UnwrapRef<null>
  playerHand: Card[];
  dealerHand: Card[];
  playerBalance: number;
  dealerBalance: number;
  result: string;
}
