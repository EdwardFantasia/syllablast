'use client'
import { Syllabl } from "./Syllabl"
import { useState, useRef } from "react"

export default function Syllable({syl, onClickFun}: {syl: Syllabl, onClickFun: any}){
    return(
        <div onClick = {() => onClickFun()} style={{marginRight: 15, display: "inline-flex", justifyContent: "center", width: "100px", height: "100px", border: syl.getSelected() ? "2.5px solid black" : "1px solid black", backgroundColor: syl.getIsCorrect() ? "limegreen":"white"}}>
            <p>{syl.getSyllableString()}</p>
        </div>
    )
}