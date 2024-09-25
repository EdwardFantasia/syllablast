'use client'
import Syllable from "./Syllable"
import { useState, useEffect } from "react"
import { Syllabl } from "./Syllabl"

export default function Puzzle({boardState, syllOnClick}: {boardState: Syllabl[][], syllOnClick: any}){
    return(
        <div style = {{marginLeft: "37%", marginRight: "67.4%"}}>
            {boardState.map((row, rowNum) => {
                return(
                    <div>
                        <div style={{display: "inline-flex", marginTop: "10px"}}>
                        {row.map((syll, colNum) => {
                            return(
                                <Syllable onClickFun = {() => syllOnClick([rowNum, colNum])} syl = {syll}></Syllable>
                            )
                        })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}