var fontList = ["Turret Road","Shadows Into Light","Satisfy","Saira Stencil One","Roboto Mono","Righteous","Permanent Marker","Pacifico","Mansalva","Ma Shan Zheng","Lobster","Liu Jian Mao Cao","Kaushan Script","Kalam","Indie Flower","Great Vibes","Courgette","Cormorant Garamond","Caveat","Amatic SC"];

var redWordList = ["Rose","Fire","Passion","Blood","Love","Hate","Anger","Power","Strength","Influence","Apple","Primal","Sun","Ruby","Happiness","Scarlet","Crimson","Raw","Primary","Bright","Sanguine","Confidence","Florid","Royal","Festive","Warmth","Inferno","Energize","Bold","Danger"]

var greenWordList = ["Tree","Leaf","Forest","Nature","Fresh","Sick","Verdant","Life","Earth","Envy","Luck","Compassion","Peace","Frolic","Happiness","Fertile","Safety","Proceed","Bright","Sanguine","Confidence","Floral","Optimistic","Festive","Mundane","Endurance","Abundance","Greed","Young","Inexperience","Fragile","Tangled","Naive","Simple","Callow","Trust","Serenity"]

var blueWordList = ["Cynical","Water","Sadness","Calm","Sky","Depression","Still","Tranquil","Deep","Mysterious","Sea","Sky","Freedom","Expansive","Remote","Aloof","Azure","Wise","Smart","Mechanical","Cold","Ice","Distant","Melancholy","Alone","Solitary","Deserted","Calculative","Bold","Conservative"]


var question = {
    greeting: [
        { Reply: "Are you doing well?", value: 1 },
        { Reply: "Have you eaten yet?", value: 1 },
        { Reply: "You alright man?", value: 1},
        { Reply: "You doing good?", value: 1 },
        { Reply: "You look well!", value: 1 },
    ],
    belief: [
        { Reply: "Sometimes, I feel that lying is inevitable. Would you lie for a good cause?", value: 2 },
        { Reply: "Life sometimes feels... aimless... Don't you think it's terrible to live forever?", value: 3 },
        { Reply: "Would you still set out doing something, knowing you will fail?", value: 2},
        { Reply: "I sometimes feel ashamed, thinking I could be doing more for those suffering. Do you feel the same?", value: 3},
        { Reply: "Sometimes it feels like we have a lot of choices, but it still feel so restricted...", value: 3},
    ],
    work: [
        { Reply: "There's so much to do... but so little time...", value: 3 },
        { Reply: "It's been tough at work recently...", value: 5 },
        { Reply: "Hey, work may be important, but don't overwork yourself.", value: 1},
        { Reply: "Maybe you should take a break...", value: 1},
        { Reply: "Work feels monotonous... Don't you feel like doing something else?", value: 5},
    ],
    future: [
        { Reply: "I know how you feel... Sometimes, you feel lost in life...", value: 4 },
        { Reply: "The future is so unpredictable... it scares me.", value: 3 },
        { Reply: "Are you hopeful about the future? Your future?", value: 1},
        { Reply: "I used to hate it when my parents shares their advice... but now... it's different.", value: 6},
        { Reply: "Don't you think that life used to be simpler?", value: 6},
    ],
    mental: [
        { Reply: "Recently it feels like there's no reason in getting out of bed...", value: 4 },
        { Reply: "It feels so hard to open up your feelings...", value: 7 },
        { Reply: "I'm afraid that people would judge me for who I am... Do you feel the same?", value: 7},
        { Reply: "Its not so easy to carry on...", value: 4},
        { Reply: "To me... Life is like one big goal or dream that we should achieve.", value: 8},
    ],
    feeling: [
        { Reply: "Do you have any lingering regrets?", value: 9 },
        { Reply: "Are you happy? With yourself now?", value: 1 },
        { Reply: "You aren't smiling as often nowadays...", value: 7},
        { Reply: "Recently I feel empty... Do you?", value: 7},
        { Reply: "Don't you ever feel lost? As though you're like a blank wall?", value: 4},
    ],
    interest: [
        { Reply: "Did you managed to enjoy yourself recently?", value: 1 },
        { Reply: "Do you have something you enjoy doing?", value: 1 },
        { Reply: "There's so little me time nowadays...", value: 3},
        { Reply: "Do you have anyone that shares the same interest as you?", value: 1},
        { Reply: "Are you doing what you love?", value: 1},
    ],
    dream: [
        { Reply: "Do you still continue dreaming?", value: 8 },
        { Reply: "Have you achieve your dreams?", value: 1 },
        { Reply: "Some days, I can't face myself in the mirror. Can you?", value: 7},
        { Reply: "Don't you think its better to dream big than not to dream?", value: 8 },
        { Reply: "It's important to never stop dreaming...", value: 8},
        { Reply: "Don't you feel that your dreams aren't taking you anywhere?", value: 9},
    ],
    family: [
        { Reply: "How's your family?", value: 1 },
        { Reply: "Have you visited your family?", value: 1 },
        { Reply: "Have you visited your family?", value: 1 },
        { Reply: "Do you feel you're alone?", value: 6},
        { Reply: "Do you feel you're giving those you love enough of your time?", value: 1},
    ],
    lifestyle: [
        { Reply: "Do you feel chained? As if something is holding you back?", value: 6 },
        { Reply: "Did you managed to find enough time for yourself?", value: 1 },
        { Reply: "It's good to have something you like to do. Do you have a hobby?", value: 1},
        { Reply: "Do you regret some of your choices?", value: 6},
        { Reply: "Don't you feel that some of the hardest choices are the right choices?", value: 6},
    ],
    // spiritual: [
    //     { Reply: "When I look up at the sky, I feel so small... It feels like a humbling experience.", value: # },
    //     { Reply: "I think that we owe the world a great deal...", value: # },
    //     { Reply: "Don't you wish you could just lie down on a pool of water, and let the waves wash your worry away?", value: #},
    //     { Reply: "Don't you think we fall down for a reason?", value: #},
    // ],

}

//var questionArr = ["feeling","work","family"] Will be erased.
var questionBlue = ["belief","work","future","mental"]; //More stoic
var questionRed = ["feeling","interest","dream"]; //More Personal
var questionGreen = ["family","lifestyle"]; //More family ,"spiritual"

var yesArr = ["yea", "yes", "yup", "i guess", "somewhat", "mmhmm", "mhm", "totally","agreed", "ya","I think so too","good","great","thanks","ok","okay","true","probably"];
var noArr = ["nope","not really","i don't think so", "no", "nah","nae","no way","naw", "i disagree","bad","not good","not well","no man","never","not true","disagreed","disagree"];
var unsureArr = ["somewhat","i dunno", "not sure", "maybe","i think so","could be","never thought about it"];
var positiveArr = ["good","great","fantastic","not bad","not so bad"];


//Replies
var sympathyArr = ["Tell me about it.", "Yea... But I'll be here for you.", "If you need me, I'm here.","I will always be here to listen to you."];
var reliefArr = ["That's good to hear!", "That's a relief...","I'm glad you're doing well.","Fantastic! I'm happy for you!","That's good.","That's reassuring!","Its good to hear that!"];
var concernArr = ["I hope you take care of yourself more...","Maybe you're busy... but it's important to take care of yourself.","That's too bad to hear...","I wish I could help somehow","If only there was some way I could help...","I hope things works out for you..."];
var ambiguousArr = ["Uh...", "I see...", "Not sure if I get what you mean.","Ummm...","Okay...","Right...","I didn't quite understand that,"]
var surpriseArr = ["Really? You don't think so?","Wow! I didn't expect you to disagree!","That answer was unexpected.","I thought you would've agreed!","That's surprising!"];
var praiseArr = ["That's optimistic of you!","You're so joyful, I have much to learn from you.","I like your attitude!","You give less credit to yourself than you deserve!","You sound happy!","The world need more people like you!","I wish everyone can be as happy as you!","Your positive energy is contagious!"];
var melancholyArr = ["But still, we must stay strong.","I'm sorry, that was depressing of me.","Yet life still has much to offer.","Don't sulk, depression doesn't suit us!","Whatever lies ahead, I'm sure we'll pull through..."]
var timeMArr = ["Time just flies like dust in the wind.","Tomorrow will always be a new day.","Sometimes, you feel that you have too much, and too little time...","We just have to spend our time wisely","Who knows what tomorrow will bring?"]
var directionMArr = ["It's hard to see what you've become","It's as though as we can see ourselves anymore...","Everything feels so pointless.","We should focus more on ourselves..."]
var pastMArr = ["Everything used to be simpler...","Sometimes I feel envious of children...","It feels like we're children in adult's body","Responsibility isn't easy...","I wish things went back to how it used to be.."]
var workMArr = ["I know what you mean...","I'm scare that I'll lose my identity to work...","I don't want work to define me...","I don't want work to consume me...","Isn't it scary how work can complete control us?"]
var emotionMArr = ["Sometimes, it can be hard to find yourself","It's difficult to be vulnerable...","I guess we all want to be understood."]
var dreamArr = ["That's good. Dream pushes us to do bigger things.","Without dreams, what could spur us forward?","Dreams are the fuel to our journey.","You're right... After all, I wouldn't be here if not for dreams."]
var adviceArr = ["It's important not to lose sight of ourselves.","Don't let the dullness of life get to you...","Sometimes, we must have a dream to have a direction...","I hope you at least still have something keeping you moving forward."]
var yesAgree = ["Sometimes, we have to act.","We won't know what would happen if we don't try.","I believe we should stick by our ideals","The right path isn't always the easiest."]
var noAgree = ["I think you're right.","You know, why do we have to complicate things?","Sometimes the best solution is the simplest.","We need to be able to answer ourselves"]
var unsureRespond = ["You don't sound so sure","I hope you find the answer","You sound lost.","You aren't too sure of yourself.","You don't seem very confident in your answer.","You should be more confident!"]






//Assets and ending
var musicArr = ["assets/EnnoAareWaterRipples.mp3","assets/QuietResource.mp3","assets/KaineSalvationNieR.mp3","assets/SoulfulFlute.mp3"];

var blackEnd = ["Charismatic.\nIt takes other colors and changes them. It unites different colors by offering depth.","Influence.\nIt changes other colors, leaving its mark on others.","Mysterious.\nBlack is stoic and silent. Simple at first glance, but hides and infinite depth within its abyss.","Elegance.\nBlack is simple, strong, and powerful. Not only does it finds beauty in simplicity, it defines simplicity itself."]

var redEnd = ["Bold.\nIt stands out amongst the crowd, the first to command the attention of everyone.","Adrenaline.\nIt brings alertness, power, bringing the rush to a dull and boring life.","Intensity.\nIt's the unrefined and raw energy that courses through everything.","Courage.\nIt the willingness to step out of your comfort zone to pursue greater heights."]

var blueEnd = ["Wise.\nIt hides within itself unimaginable depth. It knows without showing, and shows without speaking.","Peace.\nAn unchanging and timeless calmness within its colors.","Sophistication.\nIt remains regal and worldly without having to express it's own characteristic.","Patience.\nThe color that tempers the brash attitude within us, reminding us to give others an opportunity."]

var greenEnd = ["Earthly.\nIt is the color of life, and the fuel of the soul, the roots that other's planted for us to grow on.","Generosity.\nThe verdant brightness of its color perfectly capturing its life giving properties","Gratitude.\nGreen carries along the reminder that we won't be here without the shoulders of others to stand upon.","Youth.\nIt is the color of freshness and vibrancy, without being too juvenile."]

var yellowEnd = ["Optimism.\nBright and warm, few colors can spread joy as easily as yellow does.","Energy.\nIt is the color of all the motivation that compels us to greater height.","Hope.\nYellow is not only bright, but colorful. It represent the endless possibilities of tomorrow.","Encouragement.\nIt is the color that supports other, a social color that enjoys and build on the positivity of being with others."]

var cyanEnd = ["Tranquility.\nIt is the color of relaxation and peace that can be found in stillness. It is the soft color that brings peace to people.","Friendly.\nIt is neither dark nor overwhelming to behold. It hides nothing and is transparent for all to see.","Clarity.\nCyan encourages rational thinking and provides lucidity with its crystal clear color.","Possibility.\nIt is the color of the endless sky, and the beautiful clear sea. Its the color that encompasses the vast world."]

var fuchsiaEnd = ["Maturity.\nIt is a mellow color that hides a soft but deep passion within it.","Empathy.\nIt is the color that unites passion and wisdom to bring understanding.","Creativity.\nWithin its hue lies the color of beauty that blends instead of overwhelming other colors..","Bohemian.\nIt is the color of unconventional choices, one that embraces freedom and daringness to mix two of the most contrasting color into one beautiful blend."]

var whiteEnd = ["Purity.\nWhite shines brighter than any color, and adds to their intensity.","Unity.\nWhite is when all the colors comes together in harmony.","New.\nWhite is the color of beginning, the start of a journey of endless possibilities.","Kempt.\nIt is the color of cleanliness and tidiness. The presence of white demonstrates the effort placed into caring for something"]