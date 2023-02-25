const cookies = document.cookie; // クッキーを全部取得
const cookiesArray = cookies.split('; '); // 'キー=値'の形で分割して配列に入れる

for (const cookie of cookiesArray) {
  const cookieArray = cookie.split('='); // キーと値をさらに分割して配列に入れる

  // 初回アクセスなら（countというクッキーがないなら）
  if (cookieArray[0] !== 'count') {
    document.cookie = 'count=1; path=/';
    console.log('1回目のアクセスです');
  }

  // 2回目以降のアクセスなら
  if (cookieArray[0] === 'count') {
    let accessCount = parseInt(cookieArray[1]); // countの値を整数値へ変換
    accessCount++;
    document.cookie = 'count=' + accessCount + '; path=/';
    console.log(accessCount + '回目のアクセスです');
  }
}
