
import React from 'react'


const Word = ({ word, partOfSpeech, meaning, sentence, removeWord }) => {
   return (
      <div className="col s12 m6 l4">
         <div className="card blue-green darken-6">
            <div className="card-content">
               <span className="card-title">{word}</span>
               <p>{partOfSpeech}</p>
               <p style={{ textAlign: 'left', border: '0.2px solid #eee', padding: 5, marginBottom: 10 }}>{meaning}</p>
               <p style={{ textAlign: 'left' }}>{sentence}</p>
            </div>
            <div className="card-action">
               <i className="material-icons cursor" onClick={removeWord}>delete</i>
               <i className="material-icons cursor tooltipped" data-position="bottom" data-tooltip="in progress">create</i>
            </div>
         </div>
      </div>
   )
}

export default Word