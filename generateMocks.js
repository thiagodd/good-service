const fs = require('fs');

function generateMockContent(length) {
    let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
    while (content.length < length) {
        content += content;
    }
    return content.substring(0, length);
}

function generateMocks(numMocks, contentLength) {
    const mocks = [];

    for (let i = 1; i <= numMocks; i++) {
        mocks.push({
            id: i,
            title: `Mock Title ${i}`,
            category: `Category ${i % 5}`, // Categorias variadas
            content: generateMockContent(contentLength),
        });
    }

    return mocks;
}

const data = generateMocks(100, 1000);

fs.writeFileSync('mocks.json', JSON.stringify(data, null, 2));
console.log('Mocks generated successfully!');