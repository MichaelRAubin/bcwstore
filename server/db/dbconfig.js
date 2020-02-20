import mongoose from "mongoose"

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', err => {
    console.error('[DATABASE ERROR]:', err)
})

export default class DbContext {
    static async connect() {
        try {
            let cs = process.env.CONNECTION_STRING;
            let status = await mongoose.connect(cs)
            console.log("CONNECTED TO DATABASE")
            return status
        } catch (error) {
            console.error(error)
        }
    }
}