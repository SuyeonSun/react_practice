export function getWebtoons(page) {
  return fetch(
    `https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons?provider=NAVER&page=${page}&perPage=30&sort=ASC`
  ).then((res) => res.json());
}
