// xxx.spec.js 파일들은 거의 테스트 코드이다.
const utils = require('./utils');
// const assert = require('assert');

// should를 사용함으로써 Test code의 가독성을 높임.
const should = require('should');

// describe: 테스트 환경 구현
describe('utils.js모듈의 capitalize() 함수는', () => {
    // 테스트 케이스 구현
    it('문자열의 첫번째 문자를 대문자로 변환한다.', () => {
        const result = utils.capitalize('hello');
        // assert.equal(result, 'Hello');
        result.should.be.equal('Hello');
    })
})