var shell = require('child_process'),
    fs = require('fs'),
    context = 'find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{}',
    env = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;

var GitAll = function() {};

GitAll.prototype.default = function() {
    this.read('/../docs/default.md');
};

GitAll.prototype.version = function() {
    this.read('/../docs/version.md');
};

GitAll.prototype.help = function() {
    this.read('/../docs/help.md');
};

GitAll.prototype.read = function(filename) {
    fs.readFile(__dirname + filename, 'utf8', function(err, data) {
        if (err) throw err;
            console.log(data);
    });
};

GitAll.prototype.pull = function(remote, branch) {
    if (!remote) remote = 'origin';
    if (!branch) branch = 'master';

    var that = this,
    sh = context + ' pull ' + remote + ' ' + branch + ' \;'

    shell.exec(sh, function (error, stdout, stderr) {
        if (error) console.log(error);
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
    });
};

GitAll.prototype.push = function(remote, branch) {
    if (!remote) remote = 'origin';
    if (!branch) branch = 'master';

    var that = this,
    sh = context + ' push ' + remote + ' ' + branch + ' \;'

    shell.exec(sh, function (error, stdout, stderr) {
        if (error) console.log(error);
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
    });
};

module.exports = new GitAll();
