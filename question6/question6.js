var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
friends.sort((a, b) => b.length - a.length);
console.log(`Largest Name: ${friends[0]}, it's length: ${friends[0].length}`);
