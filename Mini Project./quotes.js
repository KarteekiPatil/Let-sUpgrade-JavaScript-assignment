
var quotes=["<b>You’ve gotta dance like there’s<br> nobody watching, love like you’ll never be hurt,<br> sing like there’s nobody listening, <br>and live like it’s heaven on earth.”<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ― William W. Purkey</b>",
"<b>Do one thing every day that scares you.<br><br>&nbsp &nbsp &nbsp &nbsp ― Eleanor Roosevelt</b>",
"“<b>When one door of happiness closes,<br> another opens; <br>but often we look so long at the closed<br> door that we do not see the one<br> which has been opened for us.”<br><br>&nbsp &nbsp &nbsp &nbsp ― Helen Keller</b>",
"“<b>Everything you can imagine is real.”<br>&nbsp&nbsp&nbsp&nbsp― Pablo Picasso</b>",
"“<b>Whatever you are, be a good one.”<br>&nbsp&nbsp&nbsp&nbsp ― Abraham Lincoln</b>",
"“<b>Hold the vision, trust the process.”<br>&nbsp&nbsp&nbsp&nbsp – Unknown</b>",
"<b>People who wonder <br>if the glass is half<br> empty or full miss the point.<br> The glass is refillable.”<br>&nbsp&nbsp&nbsp&nbsp – Unknown</b>",
"No matter what i wish for on this special day,<br>it will not be enough to express the feellings <br>I have for you.<br>You always have a very special place in my heart<br></b>",
"<b>Time and distance are important between friends.<br>When a friend is in your heart,<br>they remain forever....</b>",
"<b>“Two things are infinite: <br>the universe and human stupidity;<br> and I'm not sure about the universe.”<br>&nbsp&nbsp&nbsp&nbsp― Albert Einstein</b>",
"<b>“You've gotta dance like there's nobody watching,<br>Love like you'll never be hurt,<br>Sing like there's nobody listening,<br>And live like it's heaven on earth.”</b>",
"<b>काहीही नातं नसताना जे नातं निर्माण होते ती मैत्री असते….<br> कोणीही आपले नसताना अचानक आपले होते ती मैत्री असते….<br> आई-बाबांपेक्षा एखादी गोष्ट ज्यांना शेअर करावीसी वाटते ती मैत्री असते….<br> आपली छोटी छोटी गुपिते ज्यांना माहिती असते….<br>  ती मैत्री असते…. <br>आणि मरेपर्यंत विसरायला लावत नाही ती मैत्री असते….</b>",
"<b>काट्यावरून चालणारी व्यक्ती ध्येया प्रयत्न लवकर पोहचतेकारण रुतणारे <br>काटे पायाचा वेग वाढवतात.</b>",
"<b>प्रामाणिकपणाही शिकवण्याची बाब नव्हे तो रक्तात असावा लागतो त्यात<br> टक्केवारी नसते,तो असतो किंवा नसतो.</b>",
"<b>एका क्षमतेपर्यंत दु:ख सहन केल्यानंतर माणूस तुटून जातो,मग ना <br<कोणासाठी भांडतो,ना कोणाकडून काही अपेक्षा ठेवतो...</b>",
"<b>कधी कधी आपण त्या लोकांचा विचारकरण्यात वेळ वाया घालवतोजे आपल्या बद्दल१ सेकंदसुद्धा विचार करत नाहीत.</b>"];

function newQuotes(){
    var random=Math.floor(Math.random( )* (quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[random];
}