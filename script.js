function analyzeName() {
  const name = document.getElementById('name-input').value.trim();
  const result = document.getElementById('result');

  if (!name) {
    result.textContent = "Please enter a name. Telepathy isn’t working today.";
    return;
  }

  let score = 0;
  let maxScore = 50; // Maximum possible score to calculate percentage

  // ✅ Count vowels (vowels make things fancier)
  score += (name.match(/[aeiou]/gi) || []).length;

  // ✅ Rare letters bonus
  if (/[xzq]/i.test(name)) score += 5;

  // ✅ Double letter bonus
  if (/(.)\1/.test(name)) score += 4;

  // ✅ Length bonus
  if (name.length > 12) score += 6;
  else if (name.length <= 3) score -= 2;

  // ✅ Palindrome bonus
  if (name.toLowerCase() === name.toLowerCase().split('').reverse().join('')) {
    score += 8;
  }

  // ✅ Starts with 'X' or 'Q'
  if (/^[xq]/i.test(name)) score += 7;

  // ✅ Ends with a vowel
  if (/[aeiou]$/.test(name)) score += 2;

  // ✅ Sounds like a fruit
  if (/apple|banana|berry|mango|peach/i.test(name)) score += 5;

  // ✅ Contains "cat" or "dog"
  if (/cat|dog/i.test(name)) score += 4;

  // ✅ Contains "bot" or "tech"
  if (/bot|tech/i.test(name)) score += 3;

  // ✅ Too many consonants in a row
  if (/[bcdfghjklmnpqrstvwxyz]{5,}/i.test(name)) score += 6;

  // ✅ Ends with "ana"
  if (name.toLowerCase().endsWith('ana')) score += 7;

  // ✅ Contains numbers
  if (/\d/.test(name)) score += 4;

  // ✅ Sounds like a sneeze
  if (/choo|achoo|sneeze/i.test(name)) score += 10;

  // ✅ Contains 'Shahd' (custom Easter egg)
  if (/shahd/i.test(name)) score += 20;

  // ✅ If it's too short, shame it 😂
  if (name.length < 2) score -= 5;

  // Ensure score is between 0 and maxScore
  if (score < 0) score = 0;
  if (score > maxScore) score = maxScore;

  // Convert score to percentage
  let percentage = (score / maxScore) * 100;

  // 🎯 Funny feedback based on percentage
  let feedback;
  if (percentage >= 90) {
    feedback = "Wow. That’s not a name — that’s a password. Are you part alien or just trying to confuse the government?";
  } else if (percentage >= 70) {
    feedback = "Your name is weird in a cool way. People probably mispronounce it... a lot.";
  } else if (percentage >= 50) {
    feedback = "Your name is kinda weird — like pineapple on pizza. Not everyone will get it, but some will love it.";
  } else if (percentage >= 30) {
    
    feedback = "Your name is kinda normal but with a fun twist — like a person wearing mismatched socks.";
  } else if (percentage >= 10) {
   
    feedback = "Your name is pretty basic. It's like the vanilla ice cream of names — nothing wrong with that, but no surprises either.";
  } else {
    feedback = "Are you sure you entered a name and not just accidentally pressed the keyboard? This is as normal as it gets.";
  }

  // Output the result
  result.textContent = `Weirdness Score: ${percentage.toFixed(2)}%. ${feedback}`;
}
