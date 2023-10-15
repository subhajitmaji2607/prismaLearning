// const prisma = require('./prisma')
const {
    user: User
} = require('./prisma');

const createData = async() => {
    await User.create({
        data:{
            email: 'Test@test.com',
            name: 'Test Test'
        }
    });
}

createData()