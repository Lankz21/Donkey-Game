// Define the card suits and values
const cardSuits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

// Function to create a standard deck of cards
function createDeck() {
  const deck = [];
  for (let suit of cardSuits) {
    for (let value of cardValues) {
      deck.push({ suit, value });
    }
  }
  return deck;
}

// Function to shuffle the deck
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// Function to deal cards to players
function dealCards(deck, players) {
  const numberOfPlayers = players.length;
  const cardsPerPlayer = Math.floor(deck.length / numberOfPlayers);
  for (let i = 0; i < numberOfPlayers; i++) {
    players[i].hand = deck.slice(i * cardsPerPlayer, (i + 1) * cardsPerPlayer);
  }
}

// Example usage
const players = [{ name: 'Player 1', hand: [] }, { name: 'Player 2', hand: [] }];
const deck = createDeck();
const shuffledDeck = shuffleDeck(deck);
dealCards(shuffledDeck, players);

console.log('Players:');
console.log(players[0].name, players[0].hand);
console.log(players[1].name, players[1].hand);
