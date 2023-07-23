# Oasys-Sample-Repo
Oasysチェーンでのdapp開発を学ぶためのサンプルリポジトリです。

## 動かし方

- npmモジュールのインストール

  ```bash
  cd frontend && yarn
  ```

  ```bash
  cd backend && yarn
  ```

- フロントエンドのビルド

  ```bash
  cd frontend && yarn build
  ```

- フロントエンドの起動

  ```bash
  cd frontend && yarn dev
  ```

- スマートコントラクトのコンパイル

  ```bash
  cd backend && yarn compile
  ```

- スマートコントラクトのテスト

  ```bash
  cd backend && yarn test
  ```

- スマートコントラクトのデプロイ

  ```bash
  yarn deploy:hmvtest
  ```

### 参考文献
1. [ファウセット](https://faucet.testnet.oasys.games/)
2. [RPC URL 情報](https://docs.oasys.games/docs/staking/rpc-endpoint/1-1-rpc-endpoint)
3. [Sample Game - Tutorial](https://docs.oasys.games/docs/verse-developer/game/1-1)
4. [Smaple Game app GitHub](https://github.com/oasysgames/dino-runner-client)
5. [dino-runner-client - vercel](https://dino-runner-client.vercel.app/)