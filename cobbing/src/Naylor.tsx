import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styles from './Naylor.module.scss';

interface Word {
  id: string;
  name: string;
  chosen: boolean;
  selected: boolean;
}

export function Naylor() {

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

  // Words courtesy of Mike Naylor: https://hubski.com/pub/137786
  const wordList = [
    { id: 'word1', name: "Hero, hero, hero", chosen: false, selected: false },
    { id: 'word2', name: "Hero, hero... run!", chosen: false, selected: false  },
    { id: 'word3', name: "Hero, run hero.", chosen: false, selected: false  },
    { id: 'word4', name: "Hero run run!", chosen: false, selected: false  },
    { id: 'word5', name: "Run, hero hero", chosen: false, selected: false  },
    { id: 'word6', name: "Run, hero, run!", chosen: false, selected: false  },
    { id: 'word7', name: "Run run hero", chosen: false, selected: false  },
    { id: 'word8', name: "Run run run!", chosen: false, selected: false  }
  ]

  // The shuffled wordList for the initial render
  const shuffledWordList = wordList.map(w => w);
  shuffle(shuffledWordList) // comment out this line if you want to test the poem sorted right away
  const [shuffledState, setShuffledState] = useState<Word[]>(shuffledWordList);

  // The poem rendered in binary
  const binaryAnswer = [
    '0','0','0',
    '0','0','1',
    '0','1','0',
    '0','1','1',
    '1','0','0',
    '1','0','1',
    '1','1','0',
    '1','1','1'
  ];

  // When the puzzler lays the last word in the correct order,
  // the whole poem is printed out in binary
  function handleDragEnd() {
    let inOrder = true;
    wordList.forEach((word, index) => {
      if(word.name !== shuffledState[index].name) {
        inOrder = false
      }
    })

    // if(inOrder) {
    //   console.log("Correct!");
    // }

    if(inOrder) {
      console.log("Correct!");
      return(
        <div>
        `{binaryAnswer}` // Figuring out still how to type this translation out on screen
        </div>
      );
    }
  
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
    <div className={styles.naylorBox}>
      <ReactSortable 
        list={shuffledState} 
        setList={setShuffledState}
        className={styles.naylor}>
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

export default Naylor