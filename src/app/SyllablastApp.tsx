'use client'
import { useState, useRef } from "react";
import Puzzle from "./Puzzle"
import {Modal} from '@mui/material'

export default function SyllablastApp({configuration, loaderFunction}: {configuration: any, loaderFunction: any}){
    let score = useRef<number>(0);
    const [solved, setSolved] = useState(false)
    const [swaps, setSwaps] = useState<number>(0);
    const boardStates = useRef<any>([configuration.config]);
    const syl1 = useRef<any>([]);
    const syl2= useRef<any>([]);
    const solution = configuration.solution;
    const [selectedSyl, setSelectedSyl] = useState<any>([])
    let rowFirsts: any[]
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
        if(score.current == 16){
            setSolved(true)
        }
    }

    const revertBoardState = (swapNum: number) => {
        calcScore(swapNum)
        setSwaps(swapNum)
    }
    
    return(
        <div style={{marginTop: '25px'}}>
            <div style={{marginLeft: "34%"}}>
                <button style = {{fontWeight: "bold", padding: 50, backgroundColor: "white", marginRight: 40, fontSize: 20}} onClick = {() => {swaps >= 1 ? revertBoardState(swaps-1) : null}}>Undo</button>
                <button style = {{fontWeight: "bold", padding: 50, backgroundColor: "white", marginRight: 40, fontSize: 20}} onClick = {() => revertBoardState(0)}>Reset</button>
                <button style = {{fontWeight: "bold", padding: 50, backgroundColor: "white", marginRight: 40, fontSize: 20}} onClick = {() => loaderFunction({})}>Exit</button>
            </div>
            <div>
                <p style = {{marginLeft: "50%", fontWeight: "bold", fontSize: 30}}>Score: {score.current}</p>
                <p style = {{marginLeft: "50%", fontWeight: "bold", fontSize: 30}}>Swaps: {swaps}</p>
            </div>
            <Puzzle syllOnClick = {setSylls} boardState = {boardStates.current[swaps]}></Puzzle>
            <Modal open = {solved} onClose = {() => {}} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
                <div style = {{marginLeft: "38%", marginTop: "15%", width: "25%", height: "25%", backgroundColor: "white"}}>
                    <div>
                        <p style = {{textAlign: 'center', paddingTop: "5%"}}>Congratulations, you completed the puzzle!</p>
                        <button style = {{paddingLeft: "5%", marginLeft: "31%", fontWeight: "bold", padding: 25, backgroundColor: "white", fontSize: 15}} onClick={() => loaderFunction({})}>Load New Config</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}