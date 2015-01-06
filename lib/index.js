var gitAll = require('./gitAll'),
    verify = require('./cli').verify;

if (verify(['-v', '--version']))
    gitAll.version();

else if (verify(['-h', '--help']))
    gitAll.help();

else if (verify('pull'))
    gitAll.pull(process.argv[3], process.argv[4]);

else if (verify('push'))
    gitAll.pull(process.argv[3], process.argv[4]);

else
    gitAll.default();
