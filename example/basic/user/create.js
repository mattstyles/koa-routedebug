
export default function *user( next ) {
    this.status = 200
    this.body = {
        msg: 'POST'
    }
}
