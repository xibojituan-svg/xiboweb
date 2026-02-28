const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '10.209.2.162',
    user: 'test',
    password: 'kNpZS3MGgtuVg3p5',
    port: 3302
});

console.log('正在尝试连接 MySQL...');
connection.connect((err) => {
    if (err) {
        console.error('连接失败，报错如下：');
        console.error(err);
        process.exit(1);
    }
    console.log('恭喜！连接成功。');
    connection.end();
});
