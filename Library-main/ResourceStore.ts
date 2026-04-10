interface IResource {
    resourceId:number;
    title:string;
    isAvailable:boolean;
}

class LibraryItem implements IResource{
    resourceId: number;
    title: string;
    isAvailable: boolean;

    constructor(resourceId:number,title:string,isAvailable:boolean)
    {
        this.resourceId=resourceId;
        this.title=title;
        this.isAvailable=isAvailable;
    }

    getDetails():void{
        console.log("RESOURCE ID : "+this.resourceId);
        console.log("RESOURCE TITLE : "+this.title);
        console.log("RESOURCE AVAILABLE : "+this.isAvailable);   
    }
}

class digitalResearchPaper extends LibraryItem{
    downloadLink:string = "http:www.resdownload.com"

    constructor(resourceId:number,title:string,isAvailable:boolean,downloadLink:string){
        super(resourceId,title,isAvailable);
        this.downloadLink = downloadLink;
    }

    getDetails(): void {
        console.log("RESOURCE ID : "+this.resourceId);
        console.log("RESOURCE TITLE : "+this.title);
        console.log("RESOURCE AVAILABLE : "+this.isAvailable);
        console.log("RESOURCE LINK : "+this.downloadLink);
    }
}

function countAvailableItems(arr:LibraryItem[]):any{
    let count = 0;
    for(let item = 0;item<arr.length;item++){
        if(arr[item].isAvailable === true){
            count+=1;
        }
    }
    console.log("Available Items : "+count);
}

const ResourceMeta:[string,number] = ["ISBN:8076",2];
export {LibraryItem,ResourceMeta,countAvailableItems}
