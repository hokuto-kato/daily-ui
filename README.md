
# 概要
毎日UIを組んでいくプロジェクト。

# 成果物
## day01 = {device : "💻"}   
https://hokuto-kato.github.io/daily-ui/01/  
https://www.dropbox.com/s/tv8kgw1cntvpje9/01.mp4

## day02 = {device : "💻"}   
https://hokuto-kato.github.io/daily-ui/02/  
https://www.dropbox.com/s/oxthap2x9hf25f8/02.mp4

## day03 = {device : "📱"}   
https://hokuto-kato.github.io/daily-ui/03/  
https://www.dropbox.com/s/mihcqplu9ouw8l6/03.mp4

## day04 = {device : "📱"}   
https://hokuto-kato.github.io/daily-ui/04/  
https://www.dropbox.com/s/l60dlhwygeqmxyx/04.mp4

## day05 = {device : "📱"}   
https://hokuto-kato.github.io/daily-ui/05/  
https://www.dropbox.com/s/lwfj2pc9y7nvoqm/05.mp4

## day06 = {device : "📱"}   
https://hokuto-kato.github.io/daily-ui/06/  
https://www.dropbox.com/s/saseo87ndxu48bf/06.mp4

## day07 = {device : "💻"}   
https://hokuto-kato.github.io/daily-ui/07/  
https://www.dropbox.com/s/uxs2bspg3kx4spi/07.mp4

## day08 = {device : "💻"}   
https://hokuto-kato.github.io/daily-ui/08/  
https://www.dropbox.com/s/xo45d125xb5gs4d/08.mp4

## day09 = {device : "💻"}   
https://hokuto-kato.github.io/daily-ui/09/  
https://www.dropbox.com/s/qz5ee5vn9fgwyd1/09.mp4

## day10 = {device : "💻"}   
https://hokuto-kato.github.io/daily-ui/10/  
https://www.dropbox.com/s/jo0ijy2cvumimzd/10.mp4

## day11 = {device : "📱"}   
https://hokuto-kato.github.io/daily-ui/11/  
https://www.dropbox.com/s/1re6lnpn7poiobx/11.mp4

## day12 = {device : "📱"}   
https://hokuto-kato.github.io/daily-ui/12/  
https://www.dropbox.com/s/oa1jkzzlqyvw67r/12.mp4

## day13 = {device : "💻"}   
https://hokuto-kato.github.io/daily-ui/13/  
https://www.dropbox.com/s/79ttszmsj24lqsv/13.mp4

## day14 = {device : "💻"}   
https://hokuto-kato.github.io/daily-ui/14/  
https://www.dropbox.com/s/30glmuwxn7cmirl/14.mp4

# 開発
## node
v16.13.2

## dailyIDの切り替え
### src → day
```
$ yarn up {dailyID}
```
### day → src
```
$ yarn down {dailyID}
```

## dev
```
$ yarn dev
```

## build
下記のビルドコマンドで`./docs/`内にビルド。  
`yarn up {id}`もしくは`yarn down {id}`で切り替えたIDのディレクトリにビルドされるので注意。
```
$ yarn build
```