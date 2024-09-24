'use client'
import { useState, useRef } from "react";
import Puzzle from "./Puzzle"
import SyllablastLoader from "./SyllablastLoader";

export default function SyllablastApp({configuration, loaderFunction}: {configuration: any, loaderFunction: any}){
    let score = useRef<number>(0);
    var isSolved = false;
    const [swaps, setSwaps] = useState<number>(0);
    const boardStates = useRef<any>([configuration.config]);
    const syl1 = useRef<any>([]);
    const syl2= useRef<any>([]);
    const solution = configuration.solution;
    const [selectedSyl, setSelectedSyl] = useState<any>([])
    var rowFirsts: []
    rowFirsts = []

    const setSylls = (syll: number[]) => {
        if(syl1.current.length == 0){
            syl1.current = syll
            console.log(syl1.current)
            boardStates.current[swaps][syll[0]][syll[1]].setSelected(true)
            setSelectedSyl(syl1.current)
        }
        else{
            syl2.current = syll
            boardStates.current[swaps][syl1.current[0]][syl1.current[1]].setSelected(false)
            let temp1 = boardStates.current[swaps][syl1.current[0]][syl1.current[1]]
            let temp2 = boardStates.current[swaps][syl2.current[0]][syl2.current[1]]
            let newBoard : any
            newBoard = [];
            newBoard = boardStates.current[swaps].map((row: any) => [...row]);
            newBoard[syl1.current[0]][syl1.current[1]] = temp2
            newBoard[syl2.current[0]][syl2.current[1]] = temp1
            boardStates.current[swaps+1] = newBoard
            calcScore(swaps + 1)
            setSwaps(swaps + 1)
            syl1.current = []
            syl2.current = []
        }
    }

    const calcScore = (swapsInd: number) => {
        score.current = 0
        //get 1d array, check every four elements, then check in each row if a row starts with one of those syllables
        if(rowFirsts.length == 0){
            const oneD = [].concat.apply([], solution);
            let index = 0
            while(index < oneD.length){
                rowFirsts.push(oneD[index])
                index += solution.length
            }
        }
        for(let i = 0; i < boardStates.current[swapsInd].length; i++){
            if(rowFirsts.includes(boardStates.current[swapsInd][i][0].getSyllableString())){
                score.current += 1
                boardStates.current[swapsInd][i][0].setIsCorrect(true)
                let k = rowFirsts.indexOf(boardStates.current[swapsInd][i][0].getSyllableString())
                let consec = true
                for(let j = 1; j < boardStates.current[swapsInd][i].length; j++){ //highlights syllables that are in correct position even with an incorrect syllable in between
                    if(boardStates.current[swapsInd][i][j].getSyllableString() == solution[k][j] && consec == true){
                        boardStates.current[swapsInd][i][j].setIsCorrect(true)
                        score.current += 1
                    }
                    else{
                        boardStates.current[swapsInd][i][j].setIsCorrect(false)
                        consec = false
                    }
                }
            }
            else{
                for(let j = 0; j < boardStates.current[swapsInd][i].length; j++){
                    boardStates.current[swapsInd][i][j].setIsCorrect(false)
                }
            }
        }
    }

    const revertBoardState = (swapNum: number) => {
        calcScore(swapNum)
        setSwaps(swapNum)
    }
    
    return(
        <div>
            <button onClick = {() => {swaps >= 1 ? revertBoardState(swaps-1) : null}}>Undo</button>
            <button onClick = {() => revertBoardState(0)}>Reset</button>
            <p>{score.current}</p>
            <Puzzle syllOnClick = {setSylls} boardState = {boardStates.current[swaps]}></Puzzle>
            <div>
                <p>Congratulations, you completed the puzzle!</p>
                <p>Choose another configuration</p>
                {[0,1,2].map(num => {
                    return(
                        <button onClick = {() => {loaderFunction(num)}}></button>
                    )
                })}
                <SyllablastLoader setConfig = {null}></SyllablastLoader>
            </div>
        </div>
    )
}