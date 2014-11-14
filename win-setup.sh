# This doesn't work, and I don't know why
echo 'These are the commands it takes to get windows set up'
export PATH=$PATH:./
# For github's built in powershell thing
$env:PATH = $env:PATH + ";C:\Users\path\to\lsu-scheduler\win-bin"
# Something like this sets things up. Might not need .cmd
npm.cmd install -g ember-cli 
npm.cmd install -g bower 
npm.cmd install
bower.cmd install
