import chalk from 'chalk';
console.log(chalk.bgGreen('Adure Bela'));
console.log(chalk.red('Hello') + ' world ' + chalk.yellow('!'));

console.log(`
CPU:${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.blue(70)}
`)

const pritha = chalk.hex('#DEADED');
console.log(chalk.rgb(123, 45, 56).underline('this is underline color'));
console.log(pritha.bold('Princess !'));



const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Pritha';

console.log(chalk.blue('Cutepie %s'), name);
/**
 * Colors

    black
    red
    green
    yellow
    blue
    magenta
    cyan
    white
    blackBright (alias: gray, grey)
    redBright
    greenBright
    yellowBright
    blueBright
    magentaBright
    cyanBright
    whiteBright

Background colors

    bgBlack
    bgRed
    bgGreen
    bgYellow
    bgBlue
    bgMagenta
    bgCyan
    bgWhite
    bgBlackBright (alias: bgGray, bgGrey)
    bgRedBright
    bgGreenBright
    bgYellowBright
    bgBlueBright
    bgMagentaBright
    bgCyanBright
    bgWhiteBright

    
    reset - Reset the current style.
    bold - Make the text bold.
    dim - Make the text have lower opacity.
    italic - Make the text italic. (Not widely supported)
    underline - Put a horizontal line below the text. (Not widely supported)
    overline - Put a horizontal line above the text. (Not widely supported)
    inverse- Invert background and foreground colors.
    hidden - Print the text but make it invisible.
    strikethrough - Puts a horizontal line through the center of the text. (Not widely supported)
    visible- Print the text only when Chalk has a color level above zero. Can be useful for things that are purely cosmetic.


 */