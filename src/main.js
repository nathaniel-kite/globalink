const { fetch: fetchFunction, Env } = require('./../../../cloudflare/hello-ai/src/index.ts'); // Assuming 'previousFile.js' is in the parent directory
const fs = require('fs');

// Mocking the Request object for demonstration purposes
class MockRequest extends Request {}

// Mocking the environment object for demonstration purposes
const mockEnv = {
  AI: {} // Provide any necessary environment details here
};

async function main() {
  try {
    const response = await fetchFunction(new MockRequest(), mockEnv);
    const responseData = await response.json();
    console.log('Response:', responseData);

    // Write the response data to a file
    fs.writeFileSync('output.json', JSON.stringify(responseData));
    console.log('Output written to file "output.json"');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

main();
