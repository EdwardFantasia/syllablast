'use client'
import Syllable from "./Syllable";
import { useState, useEffect } from "react";
import SyllablastLoader from "./SyllablastLoader";
import SyllablastApp from "./SyllablastApp";
import { Syllabl } from "./Syllabl";

export default function page() {
  const [config, setConfig] = useState<object>({})

  const loadConfig = (loadingConfig: any) => {
    let tmpConfig: any
    let test = loadingConfig
    tmpConfig = []
    loadingConfig.config.map((row: any) => {
      let tmpRow: any;
      tmpRow = []
      row.map((syll: any) => {
        tmpRow.push(new Syllabl(syll))
      })
      tmpConfig.push(tmpRow)
    })

    test.config = tmpConfig
    setConfig(test)
  }

  if(Object.keys(config).length == 0){
    return(
      <SyllablastLoader setConfig={(configur: object) => loadConfig(configur)}></SyllablastLoader>
    )
  }
  else{
    return(
      <SyllablastApp configuration={config} loaderFunction = {loadConfig}></SyllablastApp>
    )
  }
}
