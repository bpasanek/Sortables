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

  // state for whether to display poem as binary (i.e. whether the user has solved the puzzle)
  const [binaryState, setBinaryState] = useState(false);

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
  // shuffle(shuffledWordList) // comment out this line if you want to test the poem sorted right away
  const [shuffledState, setShuffledState] = useState<Word[]>(shuffledWordList);

  // a (possibly temporary) list of the "words" in binary
  const binaryList = [
    { id: 'word1', name: "0 0 0", chosen: false, selected: false },
    { id: 'word2', name: "0 0 1", chosen: false, selected: false  },
    { id: 'word3', name: "0 1 0", chosen: false, selected: false  },
    { id: 'word4', name: "0 1 1", chosen: false, selected: false  },
    { id: 'word5', name: "1 0 0", chosen: false, selected: false  },
    { id: 'word6', name: "1 0 1", chosen: false, selected: false  },
    { id: 'word7', name: "1 1 0", chosen: false, selected: false  },
    { id: 'word8', name: "1 1 1", chosen: false, selected: false  }
  ]

  // state for the above binary list
  const [binaryListState, setBinaryListState] = useState<Word[]>(binaryList);

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

    setBinaryState(inOrder);

    // if(inOrder) {
    //   console.log("Correct!");
    // }

    // if(inOrder) {
      // console.log("Correct!");
      // for(var i=0; i<binaryAnswer.length; i++){
      //   console.log(binaryAnswer[i])
      // }
      // return(
      //   <div>
      //   `{binaryAnswer}` // Figuring out still how to type this translation out on screen
      //   </div>
      // );
    // }
  
  }

  return (binaryState ? <div className={styles.naylorBox}>
     <ReactSortable 
        list={binaryListState} 
        setList={setBinaryListState}
        className={styles.naylor}>
      {binaryListState.map((item) => (
        <div key={item.id} onDragEnd={() => handleDragEnd()} className={styles.word}>{item.name}</div>
      ))}
      </ReactSortable>
  </div> :
    <div className={styles.naylorBox}>
      <ReactSortable 
        list={shuffledState} 
        setList={setShuffledState}
        className={styles.naylor}>
      {shuffledState.map((item) => (
        <div key={item.id} onDragEnd={() => handleDragEnd()} className={styles.word}>{item.name}</div>
      ))}
      </ReactSortable>
    </div>
    
  );
};

function shuffle(list: any) {
  list.sort(() => Math.random() - 0.5);
}

export default Naylor