const headings = [
    `In the land of the free and the halls of debate,<br>Lurk gatekeepers, self-proclaimed keepers of fate.<br>With a nod and a frown, they decree who belongs,<br>Declaring their standards, righting all wrongs.<br><br>"Oh, you like that band? Name every song!<br>And if you can't, then you don't belong!"<br>They clutch at their titles, their niches so small,<br>Believing their knowledge makes them stand tall.<br><br>With their noses held high, they miss all the fun,<br>Obsessed with the rules, the joy is all done.<br>For in art, in music, in passions we keep,<br>It's not about barriers, but depths that run deep.<br><br>Gatekeepers, oh gatekeepers, why can't you see?<br>The world's so much bigger than your small decree.<br>Life's a vast ocean, not a wading pool's drip,<br>So let go of your gates and take a big sip!<br><br>For everyone's journey begins with a step,<br>Not all know the depth, the width, or the breadth.<br>But rather than mock, let’s guide and be kind,<br>For passion's a flame that in all, we can find.`,
    `There once was a gate so refined,<br>Saying, "Only the best may you find."<br>But the young and the new,<br>With vigor they grew,<br>And left that old gate far behind.`,
    `Guarding the threshold,<br>Silencing voices, they stand,<br>Gate closed, heart closed too.`,
    `In a world of open doors,<br>They stand, a relic of the past,<br>Guarding pathways not theirs to claim.<br>With disdainful eyes and narrow minds,<br>They filter, select, and often reject,<br>Yet, time flows past iron gates.`,
    `Upon the vast expanse of knowledge's shore,<br>Do gatekeepers stand, keys clenched ever tight,<br>With wary eyes, they watch, forevermore,<br>Deciding who's wrong and who might be right.<br><br>Yet in their grasp, the keys grow old and rust,<br>While new gates arise, fresh paths to explore,<br>For knowledge is a river, free and just,<br>It can't be contained; it's an endless roar.<br><br>To guard a gate, one must first understand,<br>That wisdom is vast, not to be confined,<br>By chains, or locks, or a single command,<br>For the quest to learn is the soul's true grind.<br><br>So let all seekers, near and far, unite,<br>In the quest for truth, beyond gatekeepers' sight.`,
    `In the town of old and new,<br>Gatekeepers stood, their number few.<br>With a glance, a smirk, a silent jeer,<br>They'd size you up, their message clear.<br><br>But along came Jane, with spirit free,<br>Questioning, "Why can't all see?"<br>She danced past gates, with colors bright,<br>Challenging norms, with pure delight.<br><br>The town soon hummed, a brand new song,<br>Where everyone felt they could belong.<br>For in the end, gates fell away,<br>And the town flourished, in the light of day.`
];

function changeHeading() {
    const headingElement = document.getElementById('dynamic-heading');
    const randomIndex = Math.floor(Math.random() * headings.length);
    headingElement.innerHTML = headings[randomIndex];
}

document.addEventListener('DOMContentLoaded', changeHeading);
