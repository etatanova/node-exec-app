const { exec } = require('child_process');

// Test
exec('echo "exec test is running"', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec test error: ${error}`);
    return;
  }
  console.log(`exec test stdout: ${stdout}`);
  console.error(`exec test stderr: ${stderr}`);
});

// Node
exec('node -v', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec node error: ${error}`);
    return;
  }
  console.log(`exec node stdout: ${stdout}`);
  console.error(`exec node stderr: ${stderr}`);
});

// NPM
exec('npm --version', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec npm error: ${error}`);
    return;
  }
  console.log(`exec npm stdout: ${stdout}`);
  console.error(`exec npm stderr: ${stderr}`);
});

// Yarn
exec('yarn --version', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec yarn error: ${error}`);
    return;
  }
  console.log(`exec yarn stdout: ${stdout}`);
  console.error(`exec yarn stderr: ${stderr}`);
});

// -------------------------------------------------------

const { spawn } = require('child_process');

// Test
const testSpawn = spawn('echo', ['"test spawn is running"']);
testSpawn.stdout.on('data', (data) => {
  console.log(`spawn test stdout: ${data}`);
});
testSpawn.stderr.on('data', (data) => {
  console.error(`spawn test stderr: ${data}`);
});
testSpawn.on('close', (code) => {
  console.log(`spawn test child process exited with code ${code}`);
});

// Node
const nodeSpawn = spawn('node', ['-v']);
nodeSpawn.stdout.on('data', (data) => {
  console.log(`spawn node stdout: ${data}`);
});
nodeSpawn.stderr.on('data', (data) => {
  console.error(`spawn node stderr: ${data}`);
});
nodeSpawn.on('close', (code) => {
  console.log(`spawn node child process exited with code ${code}`);
});

// NPM
const npmSpawn = spawn('npm', ['--version']);
npmSpawn.stdout.on('data', (data) => {
  console.log(`spawn npm stdout: ${data}`);
});
npmSpawn.stderr.on('data', (data) => {
  console.error(`spawn npm stderr: ${data}`);
});
npmSpawn.on('close', (code) => {
  console.log(`spawn npm child process exited with code ${code}`);
});

// Yarn
const yarnSpawn = spawn('yarn', ['--version']);
yarnSpawn.stdout.on('data', (data) => {
  console.log(`spawn yarn stdout: ${data}`);
});
yarnSpawn.stderr.on('data', (data) => {
  console.error(`spawn yarn stderr: ${data}`);
});
yarnSpawn.on('close', (code) => {
  console.log(`spawn yarn child process exited with code ${code}`);
});
