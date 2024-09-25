export default function SyllablastLoader({setConfig}: {setConfig: any}){
    const configs = [
        {
        config: [
            ["ter", "ate", "ble", "der"],
            ["fil", "in", "im", "i"],
            ["i", "late", "mac", "un"],
            ["u", "vis", "af", "wa"]
        ],
        solution: [
            ["in", "vis", "i", "ble"],
            ["im", "mac", "u", "late"],
            ["af", "fil", "i", "ate"],
            ["un", "der", "wa", "ter"]
        ]
        },
        {
        config: [
            ["force", "ment", "al", "in"],
            ["for", "ma", "am", "in"],
            ["tive", "ma", "in", "ing"],
            ["ri", "re", "te", "ex"]
        ],
        solution: [
            ["ex", "am", "in", "ing"],
            ["re", "in", "force", "ment"],
            ["in", "for", "ma", "tive"],
            ["ma", "te", "ri", "al"]
        ]
        },
        {
        config: [
            ["al", "di", "me", "di"],
            ["cu", "cal", "cal", "me"],
            ["lat", "im", "ing", "i"],
            ["on", "ate", "ag", "chan"]
        ],
        solution: [
            ["me", "chan", "i", "cal"],
            ["cal", "cu", "lat", "ing"],
            ["im", "me", "di", "ate"],
            ["di", "ag", "on", "al"]
        ]
        }
    ]
    return(
        <div style={{paddingTop: "200px"}}>
            <h1 style={{display: "flex", justifyContent: "center", fontSize: 50}}>Syllablast</h1>
            <div style={{marginLeft: "2.5%", display: "flex", alignItems: "center" , justifyContent: "center"}}>
                {configs.map((config, configNum) => {
                    return(
                        <button style = {{padding: 50, backgroundColor: "white", marginRight: 40, fontSize: 20, fontWeight: 'bold'}} onClick={() => setConfig(config)}>Config {configNum + 1}</button>
                    )
                })}
            </div>
            <div style={{paddingTop: 50, display: "flex", alignItems: "center" , justifyContent: "center"}}>
                <img style={{display: "flex", alignItems: "center" , justifyContent: "center"}} width = "50" height = "50" src="https://clipart-library.com/2023/Crescent-Moon-PNG-Clipart.png"></img>
            </div>
        </div>
    )
}