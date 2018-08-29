const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var alpha2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
              "0","1","2","3","4","5","6","7","8","9",
              "!","@","#","$","%","^","&","+"," "," "," "," "," ","","","","","","","","",""]

var adj = ["red","green","blue","yellow","orange","purple","pink","brown","black","white","gray","golden","rainbow",
                "swift","slow","fast","sluggish","speedy","flying","kind","daring","cowardish","brave","mean","ugly","pretty",
                "beautiful","round","pointy","dull","nice","good","bad","fat","thin","thick","dumb","stupid","useless","useful",
                "afraid","fearful","feared","legendary","godly","noble","foggy","dusty","old","new","young","horrible","horrific",
                "terrible","monstrous","hideous","scary","terrifying","hot","weird","quirky","funny","happy","sad","hilarious","hellish",
                "heavenly","popular","angry","angered","serious","childish","pleasured","glad","burnt","cold","moderate","reasonable",
                "senseless","tolerable","intolerable","lunatic","adventurous","dirty","filthy","clean","fortold","fortunate","unfortunate",
                "last","first","picky","girly","wild","broken","loud","quiet","soft","hard","spiky","slimy","bouncy",
                "fashionable","clumsy","tall","short","floating","dark","light","evil","proud","knightly","gay","worn","weary",
                "mortified","petrified","paralyzed","bright","hyper","hyperactive","nuclear","atomic","gentle","sweet","tasty","grown","wide",
                "embarassed","embarassing","swell","pulsing","full","empty","brainless","dead","lifeless","wanderous","festive","molten","freezing",
                "big","small","smelly","odorless","missing","confusing","random","odd","groovy","cool","impossible","shaky",
                "puzzled","hospitable","puny","perfect","fine","warm","magnificent","dapper","huge","scarce","delightful",
                "second","third","fourth","fifth","sixth","seventh","eighth","sensational","gothic","edgy","tart","sour","spicy",
                "nimble","heady","tasteful","excellent","decriptive","outgoing","exaggerated","paltry","scrawny","frightened","godlike","violet","lavender",
                "chief","deafening","painful","lush","trashy","drunk","anxious","nervous","sore","salty","unruly","synonymous","honorable",
                "fresh","poor","rich","voiceless","physical","sleepy","magical","truthful","deceptive","ignorant","mute","arrogant","icy",
                "acidic","basic","awful","holy","masculine","feminine","feline","canine","nightmarish","toxic","jelly"];

var namem = ["Jeff","Jake","Joey","Alex","Han","Hal","Jeffrey","Jeremy","Zach","Jack","Rob","Robert","Robby",
              "Randy","Doug","Douglass","Eugene","Arthur","Raymond","Ray","Billy","Joe","Jamie","Steve","Craig","Stephen",
              "Donathan","Colby","Bo","Nathan","Humphrey","Wesley","Pablo","Jerry","Tom","Tommy","Thomas","Albert","Bob",
              "Sean","William","Wayne","Jesse","Martin","Dennis","Ryan","Chris","Christopher","Kenneth","Willie","Donald","Harry",
              "Mike","Michael","Bobby","Caleb","Gabe","Teddy","Austin","Hubert","Manny","Greg","Gregory","Jackson","James",
              "Nick","Nicolas","Victor","Jim","Jimmy","Shawn","Brian","Philip","Bruce","Timothy","Frank","Louis","Jason"];

var namef = ["Nicole","Julia","Annie","Lisa","Bonnie","Ruby","Marie","Alice","Paula","Amanda","Tina","Michelle","Susan",
              "Allie","Alison","Maggie","Addie","Violet","Rachel","Amy","Emma","Kate","Jamie","Madison","Makayla","Elizabeth",
              "Rose","Rebecca","Wanda","Melissa","Alex","Janice","Ruth","Lillian","Martha","Jean","Denise","Mary","Madalyn",
              "Sarah","Laura","Becky","Abbey","Zoey","Stacey","Kelly","Vivian","Eleanor","Callie","Maddie","Ella","Alexis",
              "Lori","Deborah","Lisa","Janet","Diane","Frances","Shirley","Christine","Janet","Sandra","Christina","Dory","Jennifer",
              "Anna","Annabel","Olivia","Ashlyn","Evelyn","Teresa","Judy","Katherine","Debra","Dorothy","Barbara","Shelby","Jacquelin"];

var nou = ["chair","table","seat","speaker","pencil","eraser","animal","plant","flower","bottle","car","person","human",
                "dog","cat","hamster","gerbil","apple","bird","parakeet","foot","lamp","water","atom","molecule","fish",
                "mouse","possum","cactus","nose","mouth","eye","face","ear","tooth","slime","sombrero","bowling pin","comma","ball",
                "circle","square","oval","sphere","triangle","block","game","computer","camera","soap","backpack","ocean","sea",
                "bucket","glove","bone","hand","leg","arm","road","doorknob","strap","bed","shrimp","dolphin","anemone",
                "coral","hawk","mountain","river","volcano","cell","virus","bandit","mayor","president","turtle","duck",
                "bread","toaster","bar tender","doctor","nurse","blanket","toilet","paper","wheel","pen","highlighter",
                "key","keyboard","garden","cop","robber","villain","hero","hammer","reptile","snake","lizard","bowl","milk",
                "sugar","container","rock","cup","orange","banana","plum","letter","number","shirt","shoe","calculator","scientist",
                "teacher","minion","assisitant","butt","cord","lake","device","house","door","lolipop","candy","wrapper","trash can",
                "helicopter","airplane","motorcycle","candle","flame","fire","prisoner",
                "tree","lawnmower","string","leaf","branch","butter","bomb","finger","thumb","thumbtack","man","woman","child",
                "bull","girl","boy","senior","teen","professor","king","queen","baby","carpet","rug","comma","diaper",
                "poop","log","handle","shell","folder","notebook","button","gun","trigger","bush","ground","lawn","star","nova",
                "planet","sky","cloud","petal","bicycle","tricycle","dollar","money","coin","wire","sheet","sun","moon","hole","grass","sandwich",
                "meat","meatloaf","lettuce","carrot","pork","bean","chicken","pig","pork","flag","brute",
                "enemy","quotation","ramp","hill","cookie","cake","salad","ice cube","ice cream","cereal","box",
                "trumpet","trombone","violin","monitor","tail","world","mug","coffee","chocolate","soda","giraffe","sword","hammer","mushroom","builder","freezer","ruler",
                "lightbulb","generator","lava","motor","window","picture","camera","phone","floor","roof","wing","eagle","feather",
                "button","propeller","wheat","grain","weight","merchant","stream","popcicle","stick","twig","bar","gold","silver",
                "platinum","uranium","boulder","wheelburrow","toe","french fry","hamburger","hotdog","spring","brick","hat","pin","sink","faucet",
                "lampost","bathtub","shower","shampoo","cube","deodorant","ogre","dragon","truck","train","lantern","envelope","blood",
                "bag","plastic","frame","rubber","band","rubber band","sign","stop sign","driver","dirt","goat","rabbit","map",
                "basketball","soccerball","football","golf ball","tennis ball","tennis racket","orb","diamond","coal","proton","neutron","electron",
                "witch","bumper","cart","shopping cart","mystery","popcorn","general","kernel","admiral","navy","force",
                "putty","board","cardboard","sand","walrus","seal","knife","pit","avacado","medal","award","tank","reef",
                "sewer","comic","permafrost","bongo","guitar","donut","criminal","knight","night","day","asteroid","meteor","comet",
                "principal","glass","glacier","penguin","blueberry","strawberry","grape","poem","book","bookshelf","library","station","gas station",
                "space station","flare","telescope","intestine","lung","heart","brain",
                "wand","nomad","thing","bot","robot","mechanism","fungus","protist","gear","shutter","pulp","minecart","food",
                "rodeo","female","male","specimen","level","identity","quotation mark","bullet","mosquito","fly","nobel","prize","gift",
                "recorder","flute","clarinet","pretzel","building","layer","tower","castle","beetle","bee","wasp","hive","chip","mayonnaise","ketchup","mitocondria","power","shovel"];

var verbf = ["run","walk","fly","drown","swim","drive","eat","crawl","fall","rise","flop","lie","talk",
                "wonder","ponder","wander","reflect","ask","inquire","kill","make","bake","rake","take","adventure","stand",
                "sit","hit","turn","extend","play","waddle","float","attatch","battle","race","open","bump","admit","pass",
                "look","tempt","crush","smash","want","screw","suspend","overflow","flow","shock","soothe","breathe","unpack",
                "pack","face","note","write","read","punch","kick","consider","smile","offend","practice","grin","gaze",
                "laugh","plan","frown","hurt","pray","growl","count","coil","paste","frame","obtain","avoid",
                "crack","reduce","pause","inject","buzz","amuse","join","squeal","remove","blind","beam",
                "press","behave","introduce","incapacitate","bang","match","clear","announce","wiggle","shake","stuff","file",
                "zip","approve","tame","shiver","rub","stamp","stomp","dust","move","stay","seal","nest"];

var verbpr = ["running","walking","flying","drowning","swiming","driving","eating","crawling","falling","rising","flopping","lying","talking",
                "wondering","pondering","wandering","reflecting","asking","inquireing","killing","making","baking","raking","taking","adventuring","standing",
                "sitting","hitting","turning","extending","playing","waddling","floating","attatching","battling","racing","opening","bumping","admiting","passing",
                "looking","tempting","crushing","smashing","wanting","screwing","suspending","overflowing","flowing","shocking","soothing","breathing","unpacking",
                "packing","facing","noting","writing","reading","punching","kicking","considering","smiling","offending","practicing","grinning","gazing",
                "laughing","planing","frowning","hurting","praying","growling","counting","coiling","pasting","framing","obtaining","avoiding",
                "cracking","reduceing","pauseing","injecting","buzzing","amusing","joining","squealing","removing","blinding","beaming",
                "pressing","behaving","introducing","incapacitating","banging","matching","clearing","announceing","wiggling","shaking","stuffing","filing",
                "zipping","approving","taming","shivering","rubbing","stamping","stomping","dusting","moving","staying","sealing","nesting"];

var verbp = ["ran","walked","flew","drowned","swam","drove","ate","crawled","fell","rose","flopped","lied","talked",
                "wondered","pondered","wandered","reflected","asked","inquired","killed","made","baked","raked","taked","adventured","standed",
                "sat","hit","turned","extended","played","waddled","floated","attatched","battled","raced","opened","bumped","admitted","passed",
                "looked","tempted","crushed","smashed","wanted","screwed","suspended","overflowed","flowed","shocked","soothed","breathed","unpacked",
                "packed","faced","noted","wrote","read","punched","kicked","considered","smiled","offended","practiced","grined","gazed",
                "laughed","planed","frowned","hurt","prayed","growled","counted","coiled","pasted","framed","obtained","avoided",
                "cracked","reduced","paused","injected","buzzed","amused","joined","squealed","removed","blinded","beamed",
                "pressed","behaved","introduced","incapacitated","banged","matched","cleared","announced","wiggled","shook","stuffed","filed",
                "zipped","approved","tamed","shivered","rubbed","stamped","stomped","dusted","moved","stayed","sealed","nested"];

var fortunes = ["you will eat a slice of pizza","you will get married","you will die","you will eat a salad","you will be doing absolutely nothing","you will make a new friend",
                "you will encounter a mysterious figure","you will be in a car accident","you will be in the hospital","","","","","","","","","","","","","","","","","","","",
                "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",];

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`>help`);
  client.user.setUsername("BreadBot");
});

client.login(process.env.NDU5MTIyMDU0ODM1MjA4MjE0.DgxoHg.1oq8txjsg45yEso5f-IlsDQvObM);

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`i like bread`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`i like bread`);
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }

  if(command === "purge") {
    let perms3 = message.member.permissions;
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.sendMessage("Please provide a number between 2 and 100 for the number of messages to delete.");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.channel.sendMessage(`Couldn't delete messages because of: ${error}`));
    } else {
      message.channel.sendMessage('You do not have permission to use this command!')
    }
  }

  if(command === "roll") {
    const sides = parseInt(args[0], 10);
    var roll =  Math.floor(Math.random() * sides) + 1;
    if(sides < 1 || isNaN(sides))
      return message.channel.sendMessage("I need a number, specifically one that is greater than 0.");
      else message.channel.sendMessage("You rolled a `" + roll + '`, on a `' + sides + '` sided die!');
  }

  if(command === "coin") {
    var flip = Math.floor(Math.random() * 2) + 1;
    if (flip === 1)
      return message.channel.sendMessage("Heads!")
    if (flip === 2)
      return message.channel.sendMessage("Tails!")
  }  

  if(command === "8ball") {
    var response = Math.floor(Math.random() * 10) + 1;
    if (response === 1)
      return message.channel.sendMessage("Yes.")
    if (response === 2)
      return message.channel.sendMessage("No.")
    if (response === 3)
      return message.channel.sendMessage("I don't know.")
    if (response === 4)
      return message.channel.sendMessage("Of course!")
    if (response === 5)
      return message.channel.sendMessage("I'm not sure.")
    if (response === 6)
      return message.channel.sendMessage("No, of course not.")
    if (response === 7)
      return message.channel.sendMessage("Um, no.")
    if (response === 8)
      return message.channel.sendMessage("None of your buisness.")
    if (response === 9)
      return message.channel.sendMessage("I'm not answering that.")
    if (response === 10)
      return message.channel.sendMessage("Try again.")
    if (response === 11)
      return message.channel.sendMessage("Please don't ask me that.")
    if (response === 12)
      return message.channel.sendMessage("Why must you know this?.")
    if (response === 13)
      return message.channel.sendMessage("The answer is yes.")
    if (response === 14)
      return message.channel.sendMessage("The answer is no.")
    if (response === 15)
      return message.channel.sendMessage("That is knowledge that you can't have.")
  }  

  if(command === "info") {
    message.channel.sendMessage("This bot was created by Hyper314. This bot likes bread. You're welcome.");
  }

  if(command === "number") {
    const guessnum = parseInt(args[0], 10);
    var botnum =  Math.floor(Math.random() * 10) + 1;
    if(guessnum === botnum)
      return message.channel.sendMessage("Correct! The number was " + botnum + "!");
      else message.channel.sendMessage("Nope, the number was " + botnum + ".");
  }

  if(command === "letter") {
    var letter = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    message.channel.sendMessage("The letter is `" + alpha[letter] + "`.")
  }

  if(command === "word") {
    const letteram = parseInt(args[0], 10);
    var letter = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    var letter2 = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    var letter3 = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    var letter4 = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    var letter5 = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    var letter6 = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    var letter7 = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    var letter8 = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    var letter9 = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    var letter10 = Math.floor((Math.random() * alpha.length) + 1) % alpha.length;
    if(letteram === 1) {
    message.channel.sendMessage(alpha[letter])
    } else {
    if(letteram === 2) {
    message.channel.sendMessage(alpha[letter] + alpha[letter2])
    } else {
    if(letteram === 3) {
    message.channel.sendMessage(alpha[letter] + alpha[letter2] + alpha [letter3])
    } else {
    if(letteram === 4) {
    message.channel.sendMessage(alpha[letter] + alpha[letter2] + alpha [letter3] + alpha[letter4])
    } else {
    if(letteram === 5 || !letteram) {
    message.channel.sendMessage(alpha[letter] + alpha[letter2] + alpha [letter3] + alpha[letter4] + alpha[letter5])
    } else {
    if(letteram === 6) {
    message.channel.sendMessage(alpha[letter] + alpha[letter2] + alpha [letter3] + alpha[letter4] + alpha[letter5] + alpha[letter6])
    } else {
    if(letteram === 7) {
    message.channel.sendMessage(alpha[letter] + alpha[letter2] + alpha [letter3] + alpha[letter4] + alpha[letter5] + alpha[letter6] + alpha[letter7])
    } else {
    if(letteram === 8) {
    message.channel.sendMessage(alpha[letter] + alpha[letter2] + alpha [letter3] + alpha[letter4] + alpha[letter5] + alpha[letter6] + alpha[letter7] + alpha[letter8])
    } else {
    if(letteram === 9) {
    message.channel.sendMessage(alpha[letter] + alpha[letter2] + alpha [letter3] + alpha[letter4] + alpha[letter5] + alpha[letter6] + alpha[letter7] + alpha[letter8] + alpha[letter9])
    } else {
    if(letteram === 10) {
    message.channel.sendMessage(alpha[letter] + alpha[letter2] + alpha [letter3] + alpha[letter4] + alpha[letter5] + alpha[letter6] + alpha[letter7] + alpha[letter8] + alpha[letter9] + alpha[letter10])
    } else {
      message.channel.sendMessage("I need a number between 1 and 10.")
    }}}}}}}}}}
  }

  if(command === "gibber") {
    var letter1 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter2 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter3 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter4 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter5 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter6 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter7 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter8 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter9 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter10 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter11 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter12 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter13 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter14 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter15 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter16 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter17 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter18 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter19 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    var letter20 = Math.floor((Math.random() * alpha2.length) + 1) % alpha2.length;
    message.channel.sendMessage(alpha2[letter1] + alpha2[letter2] + alpha2[letter3] + alpha2[letter4] + alpha2[letter5] + alpha2[letter6]
     + alpha2[letter7] + alpha2[letter8] + alpha2[letter9] + alpha2[letter10]
     + alpha2[letter11] + alpha2[letter12] + alpha2[letter13] + alpha2[letter14] + alpha2[letter15] + alpha2[letter16]
     + alpha2[letter17] + alpha2[letter18] + alpha2[letter19] + alpha2[letter20])
  }

  if(command === "help") {
    var newLine = "\r\n"
    var helplist = "**BreadBot Commands**"
    helplist += newLine;
    helplist += newLine;
    helplist += "*Page 1/2*"
    helplist += newLine;
    helplist += newLine;
    helplist += "__Basic Commands__";
    helplist += newLine;
    helplist += newLine;
    helplist += "`help`: Shows a list of commands. `example: >help`";
    helplist += newLine;
    helplist += "`ping`: Shows internet speed in milliseconds. `example: >ping`";
    helplist += newLine;
    helplist += "`say`: Makes the bot say something and deletes your message. `example: >say bread`";
    helplist += newLine;
    helplist += "`info`: Provides useless info about the bot. `example: >info`";
    helplist += newLine;
    helplist += newLine;
    helplist += "__Random__";
    helplist += newLine;
    helplist += newLine;
    helplist += "`roll`: Rolls a die. `example: >roll 10`";
    helplist += newLine;
    helplist += "`coin`: Flips a coin. `example: >coin`";
    helplist += newLine;
    helplist += "`8ball`: Answers a yes or no question. `example: >8ball Do you like bread?`";
    helplist += newLine;
    helplist += "`number`: Guess a number between 1 and 10. `example: >number 3`";
    helplist += newLine;
    helplist += "`letter`: Generates a random letter. `example: >letter`";
    helplist += newLine;
    helplist += "`adj`: Generates a random adjective. `example: >adj`";
    helplist += newLine;
    helplist += "`noun`: Generates a random noun. `example: >noun`";
    helplist += newLine;
    helplist += "`thing`: Generates a random noun described by a random adjective. `example: >thing`";
    helplist += newLine;
    helplist += "`thingn`: Generates a random noun described by a random adjective, with a random male or female name. `example: >thingn`";
    helplist += newLine;
    helplist += '`word`: Generates a random "word" with up to 10 letters. `example: >word 7`';
    helplist += newLine;
    helplist += '`gibber`: Generates a random string of characters. `example: >gibber`';
    helplist += newLine;
    helplist += newLine;
    helplist += "__Math__";
    helplist += newLine;
    helplist += newLine;
    helplist += "`add`: Adds two numbers. `example: >add 2 2`";
    helplist += newLine;
    helplist += "`sub`: Subtracts two numbers. `example: >sub 7 4`";
    helplist += newLine;
    helplist += "`mul`: Multiplies two numbers. `example: >mul 7 3`";
    helplist += newLine;
    helplist += "`div`: Divides two numbers. `example: >div 0 0`";
    helplist += newLine;
    helplist += "`pow`: Gives the answer to one number to the power of another number. `example: >pow 2 3`";
    helplist += newLine;
    helplist += "`sqrt`: Gives the square root of a number. `example: >sqrt 9`";
    helplist += newLine;
    helplist += "`fac`: Gives the factorial of a number. `example: >fac 5`";
    helplist += newLine;
    helplist += "Note: Decimal numbers do not work with any of the math commands.";
    
    var helplist = message.channel.sendMessage({embed: {
      color: 14261121,
      description: helplist
    }});

    var helplist2 = "*Page 2/2*"
    helplist2 += newLine;
    helplist2 += newLine;
    helplist2 += "__Mod Commands__";
    helplist2 += newLine;
    helplist2 += newLine;
    helplist2 += '`kick`: Kicks a member. You must have "Kick Members" permission to use this. `example: >kick @member#0000`';
    helplist2 += newLine;
    helplist2 += '`ban`: Bans a member. You must have "Ban Members" permissions to use this. `example: >ban @member#0000`';
    helplist2 += newLine;
    helplist2 += '`purge`: Deletes a specified number of messages. You must have "Manage Messages" permissions to use this. `example: >purge 50`';
    helplist2 += newLine;
    helplist2 += newLine;
    helplist2 += "__Misc__";
    helplist2 += newLine;
    helplist2 += newLine;
    helplist2 += "`bread`: Sends a random picture of bread. `example: >bread` (temporarily disabled)";
    helplist2 += newLine;
    helplist2 += "`givebread`: Gives you some bread. `example: >givebread`";
    helplist2 += newLine;
    helplist2 += '`poll`: Creates a poll and pins your message. You must have "Manage Messages" permissions to use this. `example: >poll`';
    helplist2 += newLine;
    helplist2 += "`match`: Matches two people or things. `example: >match bread bot`";
    helplist2 += newLine;
    helplist2 += '`choose`: Makes the bot choose from two options. `example: >choose bread salad`';
    helplist2 += newLine;
    helplist2 += '`madlib`: Create a Mad Lib for the bot to fill in randomly. Use >helpmadlib to get more info about this command. `example: >madlib Hi, my name is namem1.`';
    helplist2 += newLine;
    helplist2 += '`box`: Open a box and find some random nouns inside. `example: >box`';
    helplist2 += newLine;
    helplist2 += '`combine`: Combines two words. `example: >combine salad bread`';
    helplist2 += newLine;
    helplist2 += '`alpha`: Arranges a list in alphabetical order. `example: >alpha pear apple orange`';

    var helplist2 = message.channel.send({embed: {
      color: 14261121,
      description: helplist2
    }});
  }

  if(command === "add") {
    const add1 = parseInt(args[0], 10);
    const add2 = parseInt(args[1], 10);
    add3 = add1 + add2
    if(isNaN(add1) || isNaN(add2))
      return message.channel.sendMessage('I need numbers, ones without decimals, please.')
      else message.channel.sendMessage('`' + add1 + '` plus `' + add2 + '` equals `' + add3 + '`.')
  }

  if(command === "sub") {
    const sub1 = parseInt(args[0], 10);
    const sub2 = parseInt(args[1], 10);
    sub3 = sub1 - sub2
    if(isNaN(sub1) || isNaN(sub2))
      return message.channel.sendMessage('I need numbers, ones without decimals, please.')
      else message.channel.sendMessage('`' + sub1 + '` minus `' + sub2 + '` equals `' + sub3 + '`.')
  }

  if(command === "mul") {
    const mul1 = parseInt(args[0], 10);
    const mul2 = parseInt(args[1], 10);
    mul3 = mul1 * mul2
    if(isNaN(mul1) || isNaN(mul2))
      return message.channel.sendMessage('I need numbers, ones without decimals, please.')
      else message.channel.sendMessage('`' + mul1 + '` times `' + mul2 + '` equals `' + mul3 + '`.')
  }

  if(command === "div") {
    const div1 = parseInt(args[0], 10);
    const div2 = parseInt(args[1], 10);
    div3 = div1 / div2
    if(isNaN(div1) || isNaN(div2))
      return message.channel.sendMessage('I need numbers, ones without decimals, please.')
      else message.channel.sendMessage('`' + div1 + '` divided by `' + div2 + '` equals `' + div3 + '`.')
  }

  if(command === "pow") {
    const pow1 = parseInt(args[0], 10);
    const pow2 = parseInt(args[1], 10);
    pow3 = Math.pow(pow1, pow2)
    if(isNaN(pow1) || isNaN(pow2))
      return message.channel.sendMessage('I need numbers, ones without decimals, please.')
      else message.channel.sendMessage('`' + pow1 + '` to the power of `' + pow2 + '` equals `' + pow3 + '`.')
  }

  if(command === "sqrt") {
    const sqrt1 = parseInt(args[0], 10);
    sqrt2 = Math.sqrt(sqrt1)
    if(isNaN(sqrt1))
      return message.channel.sendMessage('I need numbers, ones without decimals, please.')
      else message.channel.sendMessage('The square root of `' + sqrt1 + '` equals `' + sqrt2 + '`.')
  }

  if(command === "fac") {
    const fac1 = parseInt(args[0], 10);
    function factorial(n) {
      if (n === 0) {
        return 1;
      }
      return n * factorial(n - 1);
    }
    fac2 = factorial(fac1)
    if(isNaN(fac1))
      return message.channel.sendMessage('I need numbers, ones without decimals, please.')
      else message.channel.sendMessage('The factorial of `' + fac1 + '` equals `' + fac2 + '`.')
  }

  if(command === "poll") {
    let perms = message.member.permissions;
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
    message.react("👍")
    message.react("👎")
    message.pin();
    } else {
      message.channel.sendMessage("You do not have permission to use this command!")
    }
  }

  if(command === "givebread") {
    message.react("🍞")
  }

  if(command === "kick") {
    let perms2 = message.member.permissions;
    if(message.member.hasPermission("KICK_MEMBERS")) {
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!member)
        return message.channel.sendMessage("This member is not in the server.");
      if(!member.kickable) 
        return message.channel.sendMessage("I cannot kick this user.");
    
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided.";
    
      await member.kick(reason)
        .catch(error => message.reply(`I couldn't kick because of: ${error}`));
      message.channel.sendMessage(`**${member.user.tag}** has been kicked successfully.`);
    } else {
      message.reply("You do not have permission to use this command!");
    }
  }

  if(command === "ban") {
    let perms2 = message.member.permissions;
    if(message.member.hasPermission("BAN_MEMBERS")) {
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!member)
        return message.channel.sendMessage("This member is not in the server.");
      if(!member.bannable) 
        return message.channel.sendMessage("I cannot ban this user.");
    
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided.";
    
      await member.ban(reason)
        .catch(error => message.channel.sendMessage(`I couldn't ban because of: ${error}`));
      message.channel.sendMessage(`**${member.user.tag}** has been banned successfully.`);
    } else {
      message.channel.sendMessage("You do not have permission to use this command!");
    }
  }
    
  if(command === "adj") {
      var adj2 = adj.length;
      var adj3 = Math.floor((Math.random() * adj2) + 1) % adj2;
      var adj4 = adj[adj3];
      message.channel.sendMessage(adj4);
  }

  if(command === "thing") {
    var nou2 = nou.length
    var nou3 = Math.floor((Math.random() * nou2) + 1) % nou2;

    var adj2 = adj.length;
    var adj3 = Math.floor((Math.random() * adj2) + 1) % adj2;

    message.channel.sendMessage("The " + adj[adj3] + " " + nou[nou3] + ".");
  }

  if(command === "thingn") {
    const gender = args[0];
    var nou2 = nou.length;
    var nou3 = Math.floor((Math.random() * nou2) + 1) % nou2;

    var adj2 = adj.length;
    var adj3 = Math.floor((Math.random() * adj2) + 1) % adj2;

  if(gender === 'm' || gender === 'male') {
    var nam2 = namem.length;
    var nam3 = Math.floor((Math.random() * nam2) + 1) % nam2;
    var nam4 = namem[nam3]
    message.channel.sendMessage(nam4 + " the " + adj[adj3] + " " + nou[nou3] + ".");
  } else {
    if(gender === 'f' || gender === 'female') {
      var nam2 = namef.length;
      var nam3 = Math.floor((Math.random() * nam2) + 1) % nam2;
      var nam4 = namef[nam3]
      message.channel.sendMessage(nam4 + " the " + adj[adj3] + " " + nou[nou3] + ".");
  } else {
    if(!gender) {
      var rg = Math.floor(Math.random() * 2) + 1;
      if(rg === 1) {
        var nam2 = namem.length;
        var nam3 = Math.floor((Math.random() * nam2) + 1) % nam2;
        var nam4 = namem[nam3]
        message.channel.sendMessage(nam4 + " the " + adj[adj3] + " " + nou[nou3] + ".");
      } else {
        if (rg === 2) {
        var nam2 = namef.length;
        var nam3 = Math.floor((Math.random() * nam2) + 1) % nam2;
        var nam4 = namef[nam3]
        message.channel.sendMessage(nam4 + " the " + adj[adj3] + " " + nou[nou3] + ".");
      }
      }
    }
  }}
  }

  if(command === "noun") {
    var nou2 = nou.length;
    var nou3 = Math.floor((Math.random() * nou2) + 1) % nou2;
    var nou4 = nou[nou3];
    message.channel.sendMessage(nou4);
  }

  if(command === "match") {
    const aa = args[0];
    const ab = args[1];
    if(aa > ab) {
    var aaa = aa.length
    var abb = ab.length
    } else {
      var abb = aa.length
      var aaa = ab.length
    }
    var abba = aaa - abb
    var abbab = abba * 10
    var cc = abbab + abb
    var ccc = cc + abb
    var cccc = ccc * 2.5 - aaa
    if(!aa || !ab) {
    message.channel.sendMessage("I need two things or people to match!")
    }
    if(cccc > 100) {
      message.channel.sendMessage(aa + " and " + ab + " make a 100% match!");
    } else {
      if(cccc < 0) {
    message.channel.sendMessage(aa + " and " + ab + " make a 0% match.");
    } else {
      message.channel.sendMessage(aa + " and " + ab + " make a " + cccc + "% match.");
    }}
  }

  if(command === "choose") {
    const choices = args.join(" ")
    var choices2 = choices.split(" ")
    var choice = Math.floor((Math.random() * choices2.length) + 1) % choices2.length;
    message.channel.sendMessage("I choose... " + choices2[choice] + ".")
  }

  if(command === "madlib") {
    const lib = args.join(" ");

    mad = lib.replace(/adj1/gi, "**" + adj[Math.floor((Math.random() * adj.length) + 1) % adj.length] + "**");
    mad2 = mad.replace(/adj2/gi, "**" + adj[Math.floor((Math.random() * adj.length) + 1) % adj.length]+ "**");
    mad3 = mad2.replace(/adj3/gi, "**" + adj[Math.floor((Math.random() * adj.length) + 1) % adj.length]+ "**");
    mad4 = mad3.replace(/adj4/gi, "**" + adj[Math.floor((Math.random() * adj.length) + 1) % adj.length]+ "**");
    mad5 = mad4.replace(/adj5/gi, "**" + adj[Math.floor((Math.random() * adj.length) + 1) % adj.length]+ "**");

    mad6 = mad5.replace(/noun1/gi, "**" + nou[Math.floor((Math.random() * nou.length) + 1) % nou.length]+ "**");
    mad7 = mad6.replace(/noun2/gi, "**" + nou[Math.floor((Math.random() * nou.length) + 1) % nou.length]+ "**");
    mad8 = mad7.replace(/noun3/gi, "**" + nou[Math.floor((Math.random() * nou.length) + 1) % nou.length]+ "**");
    mad9 = mad8.replace(/noun4/gi, "**" + nou[Math.floor((Math.random() * nou.length) + 1) % nou.length]+ "**");
    mad10 = mad9.replace(/noun5/gi, "**" + nou[Math.floor((Math.random() * nou.length) + 1) % nou.length]+ "**");

    mad11 = mad10.replace(/namem1/gi, "**" + namem[Math.floor((Math.random() * namem.length) + 1) % namem.length]+ "**");
    mad12 = mad11.replace(/namem2/gi, "**" + namem[Math.floor((Math.random() * namem.length) + 1) % namem.length]+ "**");
    mad13 = mad12.replace(/namem3/gi, "**" + namem[Math.floor((Math.random() * namem.length) + 1) % namem.length]+ "**");

    mad14 = mad13.replace(/namef1/gi, "**" + namef[Math.floor((Math.random() * namef.length) + 1) % namef.length]+ "**");
    mad15 = mad14.replace(/namef2/gi, "**" + namef[Math.floor((Math.random() * namef.length) + 1) % namef.length]+ "**");
    mad16 = mad15.replace(/namef3/gi, "**" + namef[Math.floor((Math.random() * namef.length) + 1) % namef.length]+ "**");

    mad17 = mad16.replace(/verbf1/gi, "**" + verbf[Math.floor((Math.random() * verbf.length) + 1) % verbf.length]+ "**");
    mad18 = mad17.replace(/verbf2/gi, "**" + verbf[Math.floor((Math.random() * verbf.length) + 1) % verbf.length]+ "**");
    mad19 = mad18.replace(/verbf3/gi, "**" + verbf[Math.floor((Math.random() * verbf.length) + 1) % verbf.length]+ "**");

    mad20 = mad19.replace(/verbp1/gi, "**" + verbp[Math.floor((Math.random() * verbp.length) + 1) % verbp.length]+ "**");
    mad21 = mad20.replace(/verbp2/gi, "**" + verbp[Math.floor((Math.random() * verbp.length) + 1) % verbp.length]+ "**");
    mad22 = mad21.replace(/verbp3/gi, "**" + verbp[Math.floor((Math.random() * verbp.length) + 1) % verbp.length]+ "**");

    mad23 = mad22.replace(/verbpr1/gi, "**" + verbpr[Math.floor((Math.random() * verbpr.length) + 1) % verbpr.length]+ "**");
    mad24 = mad23.replace(/verbpr2/gi, "**" + verbpr[Math.floor((Math.random() * verbpr.length) + 1) % verbpr.length]+ "**");
    mad25 = mad24.replace(/verbpr3/gi, "**" + verbpr[Math.floor((Math.random() * verbpr.length) + 1) % verbpr.length]+ "**");

    message.channel.sendMessage(mad25);
  }

  if(command === "madlibhelp") {
    var newLine = "\r\n"
    var mhelplist = "**Mad Lib Command Help**"
    mhelplist += newLine;
    mhelplist += newLine;
    mhelplist += "With the Mad Lib command, you can type out a phrase with blanks for the bot to fill in randomly."
    mhelplist += newLine;
    mhelplist += newLine;
    mhelplist += "__Adding Blanks__";
    mhelplist += newLine;
    mhelplist += newLine;
    mhelplist += 'If you want to fill in a blank with an adjective, simply put "adj" where you want the adjective. However, you must also put a number after "adj."';
    mhelplist += newLine;
    mhelplist += 'The numbers allow you to put more than one of the same type of blank in a command. Repeating "adj1" twice, for example, will put the same adjective down twice. To generate more than one, use "adj2" or "adj3."';
    mhelplist += newLine;
    mhelplist += newLine;
    mhelplist += "__Types of Blanks__";
    mhelplist += newLine;
    mhelplist += newLine;
    mhelplist += 'Adjectives: Use "adj". You can use up to five different adjectives.';
    mhelplist += newLine;
    mhelplist += 'Nouns: Use "noun". You can use up to five different nouns.';
    mhelplist += newLine;
    mhelplist += 'Verbs: Use "verbf" for future tense verbs, "verbpr" for present, and "verbp" for past. You can use up to three of each verb tense.';
    mhelplist += newLine;
    mhelplist += 'Names: Use "namem" for male names, and "namef" for female. You can use up to three of each gender.';
    mhelplist += newLine;
    mhelplist += newLine;
    mhelplist += 'Example using all types of blanks:';
    mhelplist += newLine;
    mhelplist += ">madlib Hello, my name is namem1. My sister's name is namef1. namef1 is very adj1. I also have a brother named namem2, he likes to verbf1 with his pet noun1.";
    
    var mhelplist = message.channel.sendMessage({embed: {
      color: 14261121,
      description: mhelplist
    }});
  }

  if(command === "box") {
    var itemam = Math.floor(Math.random() * 3) + 1;
    var itemam1 = Math.floor(Math.random() * 15) + 1;
    var itemam2 = Math.floor(Math.random() * 15) + 1;
    var itemam3 = Math.floor(Math.random() * 15) + 1;
    var item1 = Math.floor((Math.random() * nou.length) + 1) % nou.length;
    var item2 = Math.floor((Math.random() * nou.length) + 1) % nou.length;
    var item3 = Math.floor((Math.random() * nou.length) + 1) % nou.length;
    if (itemam === 1) {
      message.channel.sendMessage("You opened a box and found..." + "\r\n" + itemam1 + "x " + nou[item1])
    } else {
    if (itemam === 2) {
      message.channel.sendMessage("You opened a box and found..." + "\r\n" + itemam1 + "x " + nou[item1] + "\r\n" + itemam2 + "x " + nou[item2])
    } else {
      message.channel.sendMessage("You opened a box and found..." + "\r\n" + itemam1 + "x " + nou[item1] + "\r\n" + itemam2 + "x " + nou[item2] + "\r\n" + itemam3 + "x " + nou[item3])
    }}
  }

  if(command === "combine") {
    const word2 = args[0];
    const word1 = args[1];

    if(!word2 || !word1) {
      message.channel.sendMessage("I need two words to combine.")
    } else {

    var word1h = word1.length / 2
    var word1s = word1.substr(word1h)
    var word2h = -1 * (word2.length / 2)
    var word2s = word2.slice(0, word2h)

    var wordu1 = word1s + word2s
    var wordu2 = word2s + word1s

    var word1h1 = word2.length / 2
    var word1s1 = word2.substr(word1h1)
    var word2h1 = -1 * (word1.length / 2)
    var word2s1 = word1.slice(0, word2h1)

    var wordu3 = word1s1 + word2s1
    var wordu4 = word2s1 + word1s1

    message.channel.sendMessage("Here are some possible combinations...\r\n" + wordu1 + "\r\n" + wordu2 + "\r\n" + wordu3 + "\r\n" + wordu4)
  }
  }

  if(command === "alpha") {
    const list = args.join(" ")
    var list2 = list.split(" ")
    var list3 = list2.sort()
    var list4 = list3.join(", ")
    message.channel.sendMessage("Here is your list, in alphabetical order: \r\n" + list4)
  }

  if(command === "end") {
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December",]
    var month1 = Math.floor(Math.random() * month.length) % month.length;

    if(month1 === 1 || 3 || 5 || 7 || 8 || 10 || 12){
      var day = Math.floor(Math.random() * 31) + 1;
    } else {
      if(month1 === 4 || 6 || 9 || 11){
        var day = Math.floor(Math.random() * 30) + 1;
    } else {
      if(month1 === 2){
        var day = Math.floor(Math.random() * 28) + 1;
    }}}

    if(day === 1 || day === 21 || day === 31){
      var th = "st"
    } else {
      if(day === 2 || day === 22){
        var th = "nd"
    } else {
      if(day === 3 || day === 23){
        var th = "rd"
    } else {
      th = "th"
    }}}

    var year = Math.floor(Math.random() * 100) + 2018;
    var hour = Math.floor(Math.random() * 12) + 1;
    var minute = Math.floor(Math.random() * 59);

    var am = ["AM", "PM"]
    var pm = Math.floor(Math.random() * am.length) % am.length;

    if(minute < 10){
      message.channel.sendMessage("According to my knowledge, the world will end at approximately " + month[month1] + " " + day + th + ", " + year + ", at " + hour + ":0" + minute + " " + am[pm] + ".")
    } else {
      message.channel.sendMessage("According to my knowledge, the world will end at approximately " + month[month1] + " " + day + th + ", " + year + ", at " + hour + ":" + minute + " " + am[pm] + ".")
    }
  }

  if(command === "fortune") {
    const
  }

});

client.login(config.token);
