window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 175);
  }

  const products = [
    {
      id: 1,
      title: 'The Rolling Stones 1962-present',
      description: 'Gimme Shelter',
      url: 'https://en.wikipedia.org/wiki/The_Rolling_Stones',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/RollingStones.jpg',
    },
    {
      id: 2,
      title: 'AC/DC 1973-present',
      description: 'Back in black!',
      url: 'https://en.wikipedia.org/wiki/AC/DC',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/ACDC.jpg',
    },
    {
      id: 3,
      title: 'Led Zeppelin 1968-1980',
      description: 'Dancing Days',
      url: 'https://en.wikipedia.org/wiki/Led_Zeppelin',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/LedZeppelin.jpg',
    },
    {
      id: 4,
      title: 'Beatles',
      description: 'We all live in a yellow submarine',
      url: 'https://en.wikipedia.org/wiki/The_Beatles',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/products/Beatles.jpg',
    },
  ];

  return { products: products };
}());
