const fs = require('fs');
const path = require('path');

const dockerComposePath = path.join(__dirname, 'docker-compose.yml');
const envExamplePath = path.join(__dirname, 'packages', 'db', '.env.example');
const envPath = path.join(__dirname, 'packages', 'db', '.env');

function getDatabaseConfig() {
  try {
    const fileContents = fs.readFileSync(dockerComposePath, 'utf8');

    const userMatch = fileContents.match(/POSTGRES_USER:\s*(\S+)/);
    const passwordMatch = fileContents.match(/POSTGRES_PASSWORD:\s*(\S+)/);
    const dbNameMatch = fileContents.match(/POSTGRES_DB:\s*(\S+)/);
    const portMatch = fileContents.match(/ports:\s*-\s*"(\d+):/);

    if (!userMatch || !passwordMatch || !dbNameMatch || !portMatch) {
      throw new Error("Required database configuration not found in docker-compose.yml");
    }

    const [_, POSTGRES_USER] = userMatch;
    const [__, POSTGRES_PASSWORD] = passwordMatch;
    const [___, POSTGRES_DB] = dbNameMatch;
    const [____, PORT] = portMatch;

    const host = 'localhost';

    return `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${host}:${PORT}/${POSTGRES_DB}`;
  } catch (error) {
    console.error('Error reading docker-compose.yml:', error);
    process.exit(1);
  }
}

function createEnvFile() {
  try {
    const envExample = fs.readFileSync(envExamplePath, 'utf8');
    const databaseUrl = getDatabaseConfig();

    const envContent = envExample.replace(/DATABASE_URL=.*/, `DATABASE_URL=${databaseUrl}`);
    fs.writeFileSync(envPath, envContent, 'utf8');

    console.log('.env file created in packages/db with DATABASE_URL');
  } catch (error) {
    console.error('Error creating .env file:', error);
  }
}

createEnvFile();
