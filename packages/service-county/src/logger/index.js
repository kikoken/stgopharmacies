import bunyan from 'bunyan';

const log = bunyan.createLogger({
    'name': 'county-log',
    'streams': [
        {
            'level': 'debug',
            'stream': process.stdout
        },
        {
            'level': 'error',
            'stream': process.stdout
        }
    ]
});

export default log;
