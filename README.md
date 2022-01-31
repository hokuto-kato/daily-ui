# 概要
毎日UIを組んでいくプロジェクト。

# day01
device = " 💻 "   
https://hokuto-kato.github.io/daily-ui/01/  
https://www.dropbox.com/s/tv8kgw1cntvpje9/01.mp4

# day02
device = " 💻 "   
https://hokuto-kato.github.io/daily-ui/02/  
https://www.dropbox.com/s/oxthap2x9hf25f8/02.mp4

# day03
device = " 📱 "   
https://hokuto-kato.github.io/daily-ui/03/  
https://www.dropbox.com/s/mihcqplu9ouw8l6/03.mp4

# day04
device = " 📱 "   
https://hokuto-kato.github.io/daily-ui/04/  
https://www.dropbox.com/s/l60dlhwygeqmxyx/04.mp4

# day05
device = " 📱 "   
https://hokuto-kato.github.io/daily-ui/05/  
https://www.dropbox.com/s/lwfj2pc9y7nvoqm/05.mp4

# day06
device = " 📱 "   
https://hokuto-kato.github.io/daily-ui/06/  
https://www.dropbox.com/s/saseo87ndxu48bf/06.mp4

# 開発
## node
v16.13.2

## dailyIDの切り替え
### src → day
```
$ yarn up [dailyID]
```
### day → src
```
$ yarn down [dailyID]
```

## dev
```
$ yarn dev
```

## build
1. 各設定ファイルの`dailyID`を変更。
2. 下記のビルドコマンドで`./docs/`内にビルド。
```
$ yarn build
```