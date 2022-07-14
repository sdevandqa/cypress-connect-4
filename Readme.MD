
npm install cypress
npx cypress open
npx cypress run -b chrome - Specify browser and run headlessly.
npx cypress run -- --browser chrome --spec '<path to test file>'
npx cypress run --env local_development_url="https://bbc.co.uk" - Change the local_development_url parameter/override the value.

