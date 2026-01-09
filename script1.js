const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");
const letterText = document.getElementById("letterText");

const fullText = `By now I imagine you already noticed how much of a writer I am. I am actually not that good at saying the things I feel but when it comes to writing them I like to explain every single detail so the person can understand what my voice cannot explain. When it comes to you, it's crazy how even though I’ve written many times, I always find more words to explain how much of a wonderful person you are. And I know that as you continue to experience life, more wonders would come around with it. Life is such a short word compared to what it actually means. To live and to love is only one letter apart. We live for love, and we love to live. And for me to have you to love, makes life so much easier. But how if we are nine thousand kilometers apart? It is actually pretty easy to explain. You exist. And you love back. You make me laugh, cry, miss. You make me feel. Feel how distance becomes such a little thing when it comes to you. And that is the craziest thing about this, because we are so far away but yet too close. Of course I am scared, because I would be completely out of my mind if I wasn’t. Scared of how you feel, if you are okay, if something happened. I swear Simone Tosi, I am always here. If you want to free out something that is getting on your nerves, if you want to laugh, if you want to know. For anything and everything. And so I say I love you or Ti amo or Te amo. Because you are the first person I meet who I feel deserves me saying this. For me this means so much. Love and Live; Live and Love. For your smile, those eyes, and that amazing person of yours. I live and love it. Oh and how much excitement I feel when I know I´ll be able to see you again. I know that first hug is going to be one of my highlights in life. So here you are, you just completed one more year of your life, and there are so many more years for you to live and love. So yep, a boy stole my heart and brought it to Italy, so I’m coming to find that piece of my heart. But not to take it back, just to have it closer. I miss you Mafia boss. Infinite hugs and kisses.

From: Panama
To: Casa Felicity.
`;

let index = 0;

seal.addEventListener("click", () => {
  envelope.classList.add("open");
  typeWriter();
});

function typeWriter() {
  if (index < fullText.length) {
    letterText.innerHTML += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 25);
  }
}

function goToMenu() {
  window.location.href = "menu.html";
}
