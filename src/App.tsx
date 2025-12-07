import './App.css'
import {useEffect, useState} from "react";

function App() {

  const [tracks, setTracks] = useState({

  })
  const [selectedTrackId, setSelectedTrackId] = useState(null)

  useEffect(() => {
    console.log('effect')
    fetch('', {
      headers: {
        'api-key': '6753c43d-1faf-4388-9ec0-6346446e0082'
      }
    })
      .then(response => response.json())
      .then(json => setTracks(json.data))
  }, [])

  console.log(tracks)
  // https://musicfun.it-incubator.app/api/1.0/playlists/tracks


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
    <div
      style={{
        paddingInline: 16,
      }}
    >
      <h1>Tracks</h1>
      <button onClick={() => setSelectedTrackId(null)}>reset</button>
        <ul>
          {tracks.map((track) => (
            <li
              key={track.id}
              className={track.id === selectedTrackId ? 'is-selected' : ''}
              onClick={() => setSelectedTrackId(track.id)}
            >
              <div>{track.attributes.title}</div>
              <audio
                src={track.attributes.attachments[0].url}
                controls
              ></audio>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App
