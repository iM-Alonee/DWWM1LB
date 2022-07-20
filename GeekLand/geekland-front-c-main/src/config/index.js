export default class Config {
    static baseFrontUrl = process.env.NODE_ENV === 'production' ? 'https://g1.afci.dev/geekland-c/' : 'http://127.0.0.1/geekland-front-c/';
    static baseBackUrl = process.env.NODE_ENV === 'production' ? 'https://g1.afci.dev/geekland-c/' : 'http://127.0.0.1/geekland-groupe-c/';
    
}
