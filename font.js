var fontList = ["Turret Road","Shadows Into Light","Satisfy","Saira Stencil One","Roboto Mono","Righteous","Permanent Marker","Pacifico","Mansalva","Notable","Ma Shan Zheng","Lobster","Liu Jian Mao Cao","Kaushan Script","Kalam","Indie Flower","Great Vibes","Courgette","Cormorant Garamond","Caveat","Amatic SC"];

var redWordList = ["Rose","Fire","Passion","Blood","Love","Hate","Anger","Power","Strength","Influence","Apple","Primal","Sun","Ruby","Happiness","Scarlet","Crimson","Raw","Primary","Bright","Sanguine","Confidence","Florid","Royal","Festive","Warmth","Inferno","Energize","Bold"]

// var greeting = ["Tough week huh?", "Have you eaten yet?", "You alright, mate?"];

var question = {
    greeting: [
        { Reply: "Are you doing well?", value: 1 },
        { Reply: "Have you eaten yet?", value: 1 },
        { Reply: "You alright man?", value: 1},
    ],
    feeling: [
        { Reply: "It feels like... the world's moving forward too fast...", value: 2 },
        { Reply: "Are you happy? With yourself now?", value: 1 },
        { Reply: "You aren't smiling as often nowadays...", value: 1},
    ],
    work: [
        { Reply: "There's so much to do... but so little time...", value: 2 },
        { Reply: "It's been tough at work recently...", value: 1 },
        { Reply: "Don't overwork yourself", value: 1},
    ],
    family: [
        { Reply: "How's your family?", value: 2 },
        { Reply: "Have you visited your family?", value: 1 },
        { Reply: "How's you mother doing?", value: 1},
        { Reply: "How's you father doing?", value: 1},
    ],
}

var questionArr = ["feeling","work","family"]

var yesArr = ["yea", "yes", "yup", "i guess", "somewhat", "mmhmm", "mhm", "totally","agreed"];
var noArr = ["nope","not really","i don't think so", "no", "nah","nae","no way","naw"];
var positiveArr = ["good","great","fantastic","not bad","not so bad"];

var sympathyArr = ["Tell me about it.", "C'est la vie, mon ami.", "I'm here."];
var reliefArr = ["That's good to hear!", "That's a relief...","I'm glad you're doing well.","Fantastic! I'm happy for you!","That's good."];
var concernArr = ["I hope you take care of yourself more...","Maybe you're busy... but it's important to take care of yourself.","That's too bad to hear...","I wish I could help somehow"];
var ambiguousArr = ["Right...", "I see...", "Not sure if I get what you mean.","Uhuh..."]