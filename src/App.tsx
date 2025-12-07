import './App.css'
import {useState} from "react";

function App() {

  const [tracks, setTracks] = useState([
    {
      id: 0,
      title: 'Track 1',
      url: '.',
    },
    {
      id: 1,
      title: 'Track 2',
      url: '.',
    },
  ])

  const [selectedTrackId, setSelectedTrackId] = useState(null)


  if (tracks === null) {
    return (
      <div>
        <h1>Tracks</h1>
        <span>loading...</span>
      </div>
    )
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Tracks</h1>
        <span>no tracks</span>
      </div>
    )
  }

  return (
    <div>
      <h1>Tracks</h1>
      <button onClick={() => setSelectedTrackId(null)}>reset</button>
      {tracks.length > 0
        ?
        <ul>
          {tracks.map(({id, title, url}) => (
            <li
              key={id}
              className={id === selectedTrackId ? 'is-selected' : ''}
              onClick={() => setSelectedTrackId(id)}
            >
              <div>{title}</div>
              <audio
                src={url}
                controls
              ></audio>
            </li>
          ))}
        </ul>
        : <span>no tracks</span>
      }
    </div>
  )
}

export default App
