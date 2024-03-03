export {};
interface CustomGlobal {
    SocialMedia:any
}
declare global {
    interface Window extends CustomGlobal {}
}