import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Provider, Client, defaultExchanges } from "urql";
// https://www.howtographql.com/react-urql/1-getting-started/

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

/**
 * @description urqlの初期設定
 * rql には中央のクライアントがあります。
 * 操作がいつどのように行われるかを制御し、重複排除、キャッシュ、およびキャンセルのすべての詳細を処理
 * 新しいインスタンスを作成
 * @key defaultExchanges:コア機能を提供する 3 つの組み込み交換をセットアップ @type {Array}
 * 1.dedupExchange: 操作を重複させない。同じクエリを同時に送信している場合、実際にAPIに送信されるのはそのうちの1つだけであることを確認します。
 * 2.cacheExchange: 操作結果をキャッシュします。これはあくまでドキュメントキャッシュなので、GraphQL APIの結果を、その結果がリクエストされた固有のクエリ＋変数の組み合わせでキャッシュする。
 * 3.fetchExchange: Fetch を使用して GraphQL リクエストを送信し、デフォルトでキャンセルをサポートします。
 */
const client = new Client({
  url: "http://localhost:4000",
  exchanges: defaultExchanges,
});

// urql クライアント用のコンテキスト プロバイダでラップ
root.render(
  <Provider value={client}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
