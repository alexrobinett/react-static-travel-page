import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import JournalEntry from './components/JournalEntry'
import data from './data'


function App() {
  const [count, setCount] = useState(0)

const journalData = data.map(function(entires){
    return(
      <JournalEntry
      key={entires.title}
      {...entires}
      />
    )
})

  return (
    <div className="App">
        <Navbar />
        {journalData}
    </div>
  )
}

export default App
