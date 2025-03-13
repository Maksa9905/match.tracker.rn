import { customAlphabet } from 'nanoid/non-secure'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10)

export default nanoid
