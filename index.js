var Reader = require("./Reader");
var Write = require("./Write");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var PdfWrite = require("./PdfWrite");

var lector = new Reader();
var scribe = new Write();

async function main(){
    var data = await lector.Read("./YOUR_FILE.csv");
    var processedData = Processor.Process(data);
    var users = new Table(processedData);
    
    var html = await HtmlParser.Parse(users);

    scribe.Write(Date.now() + ".html", html);
    PdfWrite.WritePDF(Date.now() + ".pdf", html);
}

main();