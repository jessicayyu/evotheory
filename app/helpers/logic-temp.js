const evoTheory = {
  male: {
      prev: {
          female: {
              baby: { 
                  mom: 'low',
                  dad: 'high',
                  any: '---'
              },
              toddler: { 
                  mom: 'low',
                  dad: 'high',
                  any: '---'
              },
          },
          male: {
              baby: {
                  dad: 'low',
                  mom: 'high',
                  any: '---'
              },
              toddler: { 
                  mom: 'low',
                  dad: 'high',
                  any: '---'
              },
          }

      }
  },
  female: {
      prev: {
          female: {
              baby: {
                  dad: 'low',
                  mom: 'high',
                  any: '---'
              },
              toddler: { 
                  mom: 'low',
                  dad: 'high',
                  any: '---'
              },
          },
          male: {
              baby: { 
                  mom: 'low',
                  dad: 'high',
                  any: '---'
              },
              toddler: {
                  dad: 'low',
                  mom: 'high',
                  any: '---'
              },
          }
      }
  },
  care: {
      mom: 'good',
      dad: 'bad',
      any: '---'
  }
};

function whatCare(gender, previous, headpiece, body, gene, eyes, flip = false) {
  const reverse = {
      low: 'high',
      high: 'low',
      any: 'any'
  }
  const ref = evoTheory[gender].prev[previous];
  const goal = {
      baby: ref.baby[headpiece],
      toddler: ref.toddler[body],
      gene: evoTheory.care[gene],
      eyes: evoTheory.care[eyes]
  };
  if (flip) {
      if (headpiece !== 'any') { goal.baby = reverse[goal.baby]; }
      if (body !== 'any') { goal.toddler = reverse[goal.toddler]; }
  }
  return `Baby: ${goal.baby} happiness for ${headpiece}'s hair,\nToddler: ${goal.toddler} happiness for ${body}'s body,\n${goal.gene} care for ${gene}'s genes,\nTeen: ${goal.eyes} care for ${eyes}'s eyes`;   
}