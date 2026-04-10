class LibraryItem {
    resourceId;
    title;
    isAvailable;
    constructor(resourceId, title, isAvailable) {
        this.resourceId = resourceId;
        this.title = title;
        this.isAvailable = isAvailable;
    }
    getDetails() {
        console.log("RESOURCE ID : " + this.resourceId);
        console.log("RESOURCE TITLE : " + this.title);
        console.log("RESOURCE AVAILABLE : " + this.isAvailable);
    }
}
class digitalResearchPaper extends LibraryItem {
    downloadLink = "http:www.resdownload.com";
    constructor(resourceId, title, isAvailable, downloadLink) {
        super(resourceId, title, isAvailable);
        this.downloadLink = downloadLink;
    }
    getDetails() {
        console.log("RESOURCE ID : " + this.resourceId);
        console.log("RESOURCE TITLE : " + this.title);
        console.log("RESOURCE AVAILABLE : " + this.isAvailable);
        console.log("RESOURCE LINK : " + this.downloadLink);
    }
}
function countAvailableItems(arr) {
    let count = 0;
    for (let item = 0; item < arr.length; item++) {
        if (arr[item].isAvailable === true) {
            count += 1;
        }
    }
    console.log("Available Items : " + count);
}
const ResourceMeta = ["ISBN:8076", 2];
export { LibraryItem, ResourceMeta, countAvailableItems };
