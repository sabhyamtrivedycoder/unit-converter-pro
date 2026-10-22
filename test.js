const assert = require('assert');
const { convertDataUnits } = require('./app.js');
console.log('🧪 Testing OmniConvert...');
assert(convertDataUnits(1024, 'MB', 'GB') === 1, '1024 MB is 1 GB');
console.log('✅ OmniConvert test passed!');
