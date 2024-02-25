# Zing Mp3 API

### ZingMp3 Api (Vercel)

Links: https://zingmp3-api-iota.vercel.app/api/v1/ (optional)

## Installation

```bash
npm i zingmp3-api-full
```

```bash
const { ZingMp3 } = require("zingmp3-api-full")
```

## Usage

### Get Song

> param {id}
```javascript
ZingMp3.getSong("ABCDFGHJ").then((data) => {
  console.log(data)
})
```

### Get Detail Playlist

> param {id}
```javascript
ZingMp3.getDetailPlaylist("ABCDFGHJ").then((data) => {
  console.log(data)
})
```

### Get Home

```javascript
ZingMp3.getDetailPlaylist("ABCDFGHJ").then((data) => {
  console.log(data)
})
```

### Get Top 100

```javascript
ZingMp3.getTop100().then((data) => {
  console.log(data)
})
```

### Get Chart Home

```javascript
ZingMp3.getChartHome().then((data) => {
  console.log(data)
})
```

### Get New Release Chart

```javascript
ZingMp3.getNewReleaseChart().then((data) => {
  console.log(data)
})
```

### Get Song Info

> param {id}
```javascript
ZingMp3.getInfoSong("ABCDFGHJ").then((data) => {
  console.log(data)
})
```

### Get Artist

> param {name} : sontungmtp
```javascript
ZingMp3.getInfoSong("sontungmtp").then((data) => {
  console.log(data)
})
```

### Get List Song Artist

> param {id, page, count}
```javascript
ZingMp3.getListArtistSong("ABCDFGHJ", "1", "15").then((data) => {
  console.log(data)
})
```

### Get Lyric Song

> param {id}
```javascript
ZingMp3.getLyric("ABCDFGHJ").then((data) => {
  console.log(data)
})
```

### Search Song

> param {query} : sontungmtp
```javascript
ZingMp3.search("sontungmtp").then((data) => {
  console.log(data)
})
```

### Get List MV

> param {id, page, count}
```javascript
ZingMp3.getListMV("ABCDFGHJ", "1", "15").then((data) => {
  console.log(data)
})
```

### Get Category MV

> param {id}
```javascript
ZingMp3.getCategoryMV("ABCDFGHJ").then((data) => {
  console.log(data)
})
```

### Get Video MV

> param {id}
```javascript
ZingMp3.getVideo("ABCDFGHJ").then((data) => {
  console.log(data)
})
```




