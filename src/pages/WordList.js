
import React, { Component } from 'react'
import Word from '../components/Word';
import Search from '../components/Search';


class WordList extends Component {

   renderWordList() {
      return this.props.words.map((word, index) => {
         return (
            <Word
               key={word.id}
               word={word.word}
               partOfSpeech={word.partOfSpeech}
               meaning={word.meaning}
               sentence={word.sentence}
               removeWord={() => this.props.removeWord(word.id)}
            />
         )
      })
   }

   render() {
      return (
         <div className="container row">
            {this.props.words.length > 0 && <Search searchWords={this.props.searchWords} />}
            {!this.props.words.length ?
               <h4 style={{ textAlign: 'center' }}>You don't have any word saved</h4>
               :
               <div className='row'>{this.renderWordList()}</div>}
         </div>
      )
   }
}

export default WordList