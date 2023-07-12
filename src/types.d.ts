export interface AuthData {
    _id: string
    email: string
    iat: number
    exp: number
}

type User = {
    _id: string,
    email: string,
}
