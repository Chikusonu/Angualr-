export class BaseLogger{
    log(){
        
    }
}
export class ConsoleLogger extends BaseLogger{
    count :number;
    
    override log(){
        this.count+=1;
        console.log("using the console loggger count value "+this.count);
    }

}

export class FileLogger extends BaseLogger{
    override log(): void{
        {
            console.log("using console logger ");
        }
    }
}

export class DBLogger extends BaseLogger{
    override log():void{
        {
            console.log("using console logger "); 
        }
    }
}