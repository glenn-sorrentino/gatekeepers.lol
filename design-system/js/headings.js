const headings = [
    `In the land of the free and the halls of debate,<br>Lurk gatekeepers, self-proclaimed keepers of fate.<br>With a nod and a frown, they decree who belongs,<br>Declaring their standards, righting all wrongs.<br><br>"Oh, you like that band? Name every song!<br>And if you can't, then you don't belong!"<br>They clutch at their titles, their niches so small,<br>Believing their knowledge makes them stand tall.<br><br>With their noses held high, they miss all the fun,<br>Obsessed with the rules, the joy is all done.<br>For in art, in music, in passions we keep,<br>It's not about barriers, but depths that run deep.<br><br>Gatekeepers, oh gatekeepers, why can't you see?<br>The world's so much bigger than your small decree.<br>Life's a vast ocean, not a wading pool's drip,<br>So let go of your gates and take a big sip!<br><br>For everyone's journey begins with a step,<br>Not all know the depth, the width, or the breadth.<br>But rather than mock, let’s guide and be kind,<br>For passion's a flame that in all, we can find.`,
    `There once was a gate so refined,<br>Saying, "Only the best may you find."<br>But the young and the new,<br>With vigor they grew,<br>And left that old gate far behind.`,
    `Guarding the threshold,<br>Silencing voices, they stand,<br>Gate closed, heart closed too.`,
    `In a world of open doors,<br>They stand, a relic of the past,<br>Guarding pathways not theirs to claim.<br>With disdainful eyes and narrow minds,<br>They filter, select, and often reject,<br>Yet, time flows past iron gates.`,
    `Upon the vast expanse of knowledge's shore,<br>Do gatekeepers stand, keys clenched ever tight,<br>With wary eyes, they watch, forevermore,<br>Deciding who's wrong and who might be right.<br><br>Yet in their grasp, the keys grow old and rust,<br>While new gates arise, fresh paths to explore,<br>For knowledge is a river, free and just,<br>It can't be contained; it's an endless roar.<br><br>To guard a gate, one must first understand,<br>That wisdom is vast, not to be confined,<br>By chains, or locks, or a single command,<br>For the quest to learn is the soul's true grind.<br><br>So let all seekers, near and far, unite,<br>In the quest for truth, beyond gatekeepers' sight.`,
    `In the town of old and new,<br>Gatekeepers stood, their number few.<br>With a glance, a smirk, a silent jeer,<br>They'd size you up, their message clear.<br><br>But along came Jane, with spirit free,<br>Questioning, "Why can't all see?"<br>She danced past gates, with colors bright,<br>Challenging norms, with pure delight.<br><br>The town soon hummed, a brand new song,<br>Where everyone felt they could belong.<br>For in the end, gates fell away,<br>And the town flourished, in the light of day.`,
    `Gates closed, they stand in watchful might,<br>Always judging, saying what's right,<br>Tales of old, they repeat and tell,<br>Echoing a past, in which they dwell.<br>Keeping the new from coming through,<br>Eager to mock, with a view so skewed.<br>Yet in the end, gates are but a frame,<br>Passing them by, we play our own game.`,
    `In days of yore, when the world was but young,<br>Gatekeepers guarded tales yet unsung.<br>With solemn oaths and ancient creed,<br>They decided who could proceed.<br><br>Yet as the ages came to pass,<br>A new generation questioned their task.<br>"Why do you stand, with key and chain?<br>Isn’t knowledge for all, not just for the vain?"<br><br>The young bard sung, with voice so clear,<br>Challenging gatekeepers, conquering fear.<br>For in every heart, a story resides,<br>Not to be silenced, by those who deride.<br><br>The epic continues, as stories unfold,<br>Of gatekeepers old, and heroes bold.`,
    `In a village nestled between two hills,<br>Where time seemed to stand eerily still,<br>Lived the gatekeepers, with eyes so cold,<br>Guarding secrets and stories of old.<br><br>A traveler came, with dreams in her eyes,<br>But the gatekeepers dismissed her with sighs.<br>"You're not one of us," they began to decry,<br>"But why?" she asked, "Why even try?"<br><br>With a smile and a song, she moved along,<br>Showing the village where they belong.<br>For gates can be opened, and keys can be shared,<br>In a world where everyone cared.`,
    `In shadows they stand, with an air so grand,<br>Claiming the keys, with a stern reprimand.<br>But the world moves on, with or without their grace,<br>For knowledge and passion, aren’t confined to one place.`,
    `Gatekeepers stand with pride so tall,<br>Believing they know the best for all.<br>Yet the world outside is vast and wide,<br>Filled with mysteries they've often denied.<br><br>New voices rise, challenging their reign,<br>Showing the world there's much to gain.<br>For every gate and every door,<br>Hides not just one truth, but many more.`,
    `it's all just<br>your<br>opinion, man.<br>We've all got at least one.<br>we shall pass.`
];

function changeHeading() {
    const headingElement = document.getElementById('dynamic-heading');
    const randomIndex = Math.floor(Math.random() * headings.length);
    headingElement.innerHTML = headings[randomIndex];
}

document.addEventListener('DOMContentLoaded', changeHeading);
