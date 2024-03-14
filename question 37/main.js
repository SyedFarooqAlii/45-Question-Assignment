"use strict";
function make_shirts(size = `large`, text = `I Love TS. `) {
    console.log(`Creating a ${size} with the message: ${text}`);
}
;
make_shirts();
make_shirts(`medium`);
make_shirts(`small`, `I Love Python`);
