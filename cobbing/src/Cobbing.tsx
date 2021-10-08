import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styles from './Cobbing.module.scss';

interface Word {
  id: string;
  name: string;
  chosen: boolean;
  selected: boolean;
}

export function Cobbing() {

  // Audio files generated using https://ttsmp3.com/
  // Substituted phonetics for some words not easily understood by the translator
  const audioList = [
    new Audio("./audio/wan.mp3"),
    new Audio("./audio/do.mp3"),
    new Audio("./audio/tree.mp3"),
    new Audio("./audio/fear.mp3"),
    new Audio("./audio/fife.mp3"),
    new Audio("./audio/seeks.mp3"),
    new Audio("./audio/siphon.mp3"), // 'sifen'
    new Audio("./audio/eat.mp3"),
    new Audio("./audio/neighing.mp3"),
    new Audio("./audio/den.mp3"),
    new Audio("./audio/elephan.mp3"), // 'ellafan'
    new Audio("./audio/twirl.mp3")]

  // Words courtesy of Bob Cobbing: https://www.tape-mag.com/Poem_Drawing_1_Wan_do_Three+Bob_Cobbing+ARTISTS_und_BANDS_LITERATURE-1-1-893-5.html
  const wordList = [
    { id: 'word1', name: "wan", chosen: false, selected: false },
    { id: 'word2', name: "do", chosen: false, selected: false  },
    { id: 'word3', name: "tree", chosen: false, selected: false  },
    { id: 'word4', name: "fear", chosen: false, selected: false  },
    { id: 'word5', name: "fife", chosen: false, selected: false  },
    { id: 'word6', name: "seeks", chosen: false, selected: false  },
    { id: 'word7', name: "siphon", chosen: false, selected: false  },
    { id: 'word8', name: "eat", chosen: false, selected: false  },
    { id: 'word9', name: "neighing", chosen: false, selected: false  },
    { id: 'word10', name: "den", chosen: false, selected: false  },
    { id: 'word11', name: "elephan'", chosen: false, selected: false  },
    { id: 'word12', name: "twirl", chosen: false, selected: false  },
  ]

  // The shuffled wordList for the initial render
  const shuffledWordList = wordList.map(w => w);
  shuffle(shuffledWordList) // comment out this line if you want to test the poem sorted right away
  const [shuffledState, setShuffledState] = useState<Word[]>(shuffledWordList);

  // When the puzzler lays the last word in the correct order,
  // the whole poem is spoken in sequence.
  function handleDragEnd() {
    let inOrder = true;
    wordList.forEach((word, index) => {
      if(word.name !== shuffledState[index].name) {
        inOrder = false
      }
    })

    if(inOrder) {
      audioList.forEach((audio, index) => {
        setTimeout(function() {
          audio.play();
        }, 750*index);
      });
    }
  }

  // When the puzzler clicks a word, the word is spoken
  function handleClick(name: string) {
      switch(name) {
        case wordList[0].name:
          audioList[0].play();
          break;
        case wordList[1].name:
          audioList[1].play();
          break;
        case wordList[2].name:
          audioList[2].play();
          break;
        case wordList[3].name:
          audioList[3].play();
          break;
        case wordList[4].name:
          audioList[4].play();
          break;
        case wordList[5].name:
          audioList[5].play();
          break;
        case wordList[6].name:
          audioList[6].play();
          break;
        case wordList[7].name:
          audioList[7].play();
          break;
        case wordList[8].name:
          audioList[8].play();
          break;
        case wordList[9].name:
          audioList[9].play();
          break;
        case wordList[10].name:
          audioList[10].play();
          break;
        case wordList[11].name:
          audioList[11].play();
          break;
      }
  }

  return (
    <div className={styles.cobbingBox}>
      <ReactSortable 
        list={shuffledState} 
        setList={setShuffledState}
        className={styles.cobbing}>
      {shuffledState.map((item) => (
        <div key={item.id} onDragEnd={() => handleDragEnd()} onClick={() => handleClick(item.name)} className={styles.word}>{item.name}</div>
      ))}
      </ReactSortable>
    </div>
    
  );
};

function shuffle(list: any) {
  list.sort(() => Math.random() - 0.5);
}

export default Cobbing