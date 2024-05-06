console.log('----------- 14- Exercise: Stopwatch -----------');

const sw = new Stopwatch14;

console.log(sw);

function Stopwatch14() {

    let startTime, endTime, running, duration = 0;

    this.start = () => {
        if (running) {
            throw new Error('Stopwatch14 has already started.')
        };

        running = true;

        startTime = new Date();
}
    this.stop = () => {
        if (!running) {
            throw new Error('Stopwatch14 is not started.')
        };

            running = false;

            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
    };

    this.reset = () => {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
        
    Object.defineProperty(this, 'duration', {
        get: () => {return duration}
    });
}

console.log('----------- 10- Exercise: move the Stopwatch methods to the Prototype of the stopwatch -----------');

const sw10 = new Stopwatch10;

console.log(sw);

function Stopwatch10() {

    let startTime, endTime, running, duration = 0;
        
    Object.defineProperty(this, 'duration', {
        get: () => {return duration}
    });
}

Stopwatch10.prototype.start = () => {
    if (running) {
        throw new Error('Stopwatch10 has already started.')
    };

    running = true;

    startTime = new Date();
};
Stopwatch10.prototype.stop = () => {
    if (!running) {
        throw new Error('Stopwatch10 is not started.')
    };

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
};
Stopwatch10.prototype.reset = () => {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
};