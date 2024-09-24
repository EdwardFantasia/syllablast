export class Syllabl{
    private syllableString: string;
    private isCorrect: boolean;
    private selected: boolean;
    constructor(syll: string){
        this.syllableString = syll;
        this.isCorrect = false;
        this.selected = false;
    }
    getSyllableString(){
        return this.syllableString;
    }
    setSyllableString(syll: string){
        this.syllableString = syll
    }
    getIsCorrect(){
        return this.isCorrect;
    }
    setIsCorrect(bool: boolean){
        this.isCorrect = bool;
    }
    setSelected(bool: boolean){
        this.selected = bool;
    }
    getSelected(){
        return this.selected;
    }
}