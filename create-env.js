const fs = require('fs')
const path = `./.env`
const vars = `
SERVICE_ID=${process.env.SERVICE_ID_NETLIFY}\n
TEMPLATE_ID=${process.env.TEMPLATE_ID_NETLIFY}\n
USER_ID=${process.env.USER_ID_NETLIFY}
`
fs.writeFileSync(path, vars)