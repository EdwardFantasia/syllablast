'use client'
import Syllable from "./Syllable";
import { useState, useEffect } from "react";
import SyllablastLoader from "./SyllablastLoader";
import SyllablastApp from "./SyllablastApp";
import { Syllabl } from "./Syllabl";

export default function page() {
  const [config, setConfig] = useState<object>({})
  const [dm, setDM] = useState<boolean>(false)

  useEffect(() => {
    setConfig(config)
  }, [config])

  const loadConfig = (loadingConfig: any) => {
    if(Object.keys(loadingConfig).length != 0){
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
    else{
      setConfig(loadingConfig)
    }
  }

  if(Object.keys(config).length == 0){
    return(
      <div data-testid = {"loader"}>
        <SyllablastLoader setConfig={loadConfig}></SyllablastLoader>
      </div>
    )
  }
  else{
    return(
      <div data-testid = {"app"}>
        <SyllablastApp configuration={config} loaderFunction = {loadConfig}></SyllablastApp>
      </div>
    )
  }
}
