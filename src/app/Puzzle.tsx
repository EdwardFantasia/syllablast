'use client'
import Syllable from "./Syllable"
import { useState, useEffect } from "react"
import { Syllabl } from "./Syllabl"

export default function Puzzle({boardState, syllOnClick}: {boardState: Syllabl[][], syllOnClick: any}){
    return(
        <div style = {{paddingLeft: "200px", border: "1px solid black"}}>
            {boardState.map((row, rowNum) => {
                return(
                    <div>
                        <div style={{display: "inline-flex", justifyContent: "flex"}}>
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