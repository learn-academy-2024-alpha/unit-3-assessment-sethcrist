import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) this is our function that lets us draw cards randomly and at a limit of 52.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) this is randomizing the cards being drawn, taking into account the length from the suit and rank variables 
    if (hand.indexOf(draw) === -1) {
      // 3) this checks to see if the card has already been drawn and if it has been drawn removes it from being drawn agian
      setHand([...hand, draw])
      // 4) this is updating the hand component
    } else if (hand.length !== 52) {
      // 5) this makes sure you cant draw more than 52 cards, if this condition has not been met you can keep drawing
      drawCard()
      // 6) this is calling the function which lets us draw cards
    } else {
      // 7) this is popping up a window telling us that all cards have been drawn
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
      setHand([])
  }

  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App
