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
        <div>
            {configs.map((config, configNum) => {
                return(
                    <button onClick={() => setConfig(config)}>Config {configNum}</button>
                )
            })}
        </div>
    )
}