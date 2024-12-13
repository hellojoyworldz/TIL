# 에러 모음

### npm 캐시 폴더 권한 에러
> npm 캐시 폴더의 권한 문제로 인해 발생

```bash
npm error Your cache folder contains root-owned files, due to a bug in
npm error previous versions of npm which has since been addressed.
npm error
npm error To permanently fix this problem, please run:
npm error   sudo chown -R 501:20 "/Users/sunahgwak/.npm"
npm error A complete log of this run can be found in: /Users/sunahgwak/.npm/_logs/2024-09-27T12_31_09_223Z-debug-0.log
```
<img src="./images/스크린샷 2024-09-27 21.41.34.png">

**소유권 변경**
`sudo chown -R 501:20 "/Users/sunahgwak/.npm"`
비밀번호 입력해야 함
<img src="./images/스크린샷 2024-09-27 21.42.34.png">

**캐시 정리**
`npm cache clean --force`

그래도 안된다면 node_modules 폴더와 package-lock.json 파일을 삭제 후 install 시고