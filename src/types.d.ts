export interface AuthData {
    _id: string
    email: string
    iat: number
    exp: number
}

export type User = {
    _id: string,
    email: string,
}

export interface ResponseAuthToken {
    authToken: string
}

export interface BoardItemProps {
    src: string
    title: string
}

export interface NavItemProps {
    path: string,
    children: React.ReactNode
}

export type postalCode = `${number}${number}${number}${number}${number}${number}${number}${number}${string}`
