import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,//ten database
    process.env.DATABASE_USERNAME,//username đăng nhập
    process.env.DATABASE_PASSWORD,// mật khẩu
    {
        host: process.env.DATABASE_HOST, //link hosting
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connect Success!');
}).catch((error) => {
    console.error('Connect Error!', error);
});

export default sequelize