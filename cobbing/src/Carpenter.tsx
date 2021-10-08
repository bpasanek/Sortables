import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styles from './Carpenter.module.scss';

interface Word {
  id: string;
  name: string;
  chosen: boolean;
  selected: boolean;
}

export function Carpenter() {

  // // Audio files generated using https://ttsmp3.com/
  // // Substituted phonetics for some words not easily understood by the translator
  // const audioList = [
  //   new Audio("./audio/wan.mp3"),
  //   new Audio("./audio/do.mp3"),
  //   new Audio("./audio/tree.mp3"),
  //   new Audio("./audio/fear.mp3"),
  //   new Audio("./audio/fife.mp3"),
  //   new Audio("./audio/seeks.mp3"),
  //   new Audio("./audio/siphon.mp3"), // 'sifen'
  //   new Audio("./audio/eat.mp3"),
  //   new Audio("./audio/neighing.mp3"),
  //   new Audio("./audio/den.mp3"),
  //   new Audio("./audio/elephan.mp3"), // 'ellafan'
  //   new Audio("./audio/twirl.mp3")]

  // Words courtesy of JR Carpenter: http://luckysoap.com/prosepoetics.html
  const wordList = [
    { id: 'word1', name: "a lull", chosen: false, selected: false },
    { id: 'word2', name: "a rumor", chosen: false, selected: false  },
    { id: 'word3', name: "a hint", chosen: false, selected: false  },
    { id: 'word4', name: "a scent", chosen: false, selected: false  },
    { id: 'word5', name: "a quickening", chosen: false, selected: false  },
    { id: 'word6', name: "a freshening", chosen: false, selected: false  },
    { id: 'word7', name: "a keening", chosen: false, selected: false  },
    { id: 'word8', name: "a stiffening", chosen: false, selected: false  },
    { id: 'word9', name: "a howling", chosen: false, selected: false  },
    { id: 'word10', name: "a surging", chosen: false, selected: false  },
    { id: 'word11', name: "a tearing", chosen: false, selected: false  },
    { id: 'word12', name: "a raging", chosen: false, selected: false  },
    { id: 'word13', name: "a torment", chosen: false, selected: false  }
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
      console.log("Correct!");
    }

  //   if(inOrder) {
  //     audioList.forEach((audio, index) => {
  //       setTimeout(function() {
  //         audio.play();
  //       }, 750*index);
  //     });
  //   }
  }

  // When the puzzler clicks a word, the word is spoken
  function handleClick(name: string) {
  //     switch(name) {
  //       case wordList[0].name:
  //         audioList[0].play();
  //         break;
  //       case wordList[1].name:
  //         audioList[1].play();
  //         break;
  //       case wordList[2].name:
  //         audioList[2].play();
  //         break;
  //       case wordList[3].name:
  //         audioList[3].play();
  //         break;
  //       case wordList[4].name:
  //         audioList[4].play();
  //         break;
  //       case wordList[5].name:
  //         audioList[5].play();
  //         break;
  //       case wordList[6].name:
  //         audioList[6].play();
  //         break;
  //       case wordList[7].name:
  //         audioList[7].play();
  //         break;
  //       case wordList[8].name:
  //         audioList[8].play();
  //         break;
  //       case wordList[9].name:
  //         audioList[9].play();
  //         break;
  //       case wordList[10].name:
  //         audioList[10].play();
  //         break;
  //       case wordList[11].name:
  //         audioList[11].play();
  //         break;
  //     }
  }

  return (
    <div className={styles.carpenterBox}>
      <ReactSortable 
        list={shuffledState} 
        setList={setShuffledState}
        className={styles.carpenter}>
      {shuffledState.map((item) => (
        <div 
          key={item.id} 
          onDragEnd={() => handleDragEnd()} 
          onClick={() => handleClick(item.name)} 
          className={styles.word}
          // style={{fontSize: '2 rem'}}
        >{item.name}</div>
      ))}
      </ReactSortable>
    </div>
    
  );
};

function shuffle(list: any) {
  list.sort(() => Math.random() - 0.5);
}

export default Carpenter