'use client'
import { Syllabl } from "./Syllabl"
import { useState, useRef } from "react"

export default function Syllable({syl, onClickFun}: {syl: Syllabl, onClickFun: any}){
    return(
        <p onClick = {() => onClickFun()} style={{padding: "50px", border: syl.getSelected() ? "2.5px solid black" : "1px solid black", backgroundColor: syl.getIsCorrect() ? "limegreen":"white"}}>{syl.getSyllableString()}</p>
    )
}