## 簡答題

### 1.請以自己的話解釋 API 是什麼？

溝通的橋樑，接收要求，將要求給予資料庫，並將資料庫的資料回送給客戶。

### 2.請找出三個課程沒教的 HTTP status code 並簡單介紹

508 Loop Detected：伺服器陷入迴圈，屬於操作失敗。

418 I'm a teapot：對茶壺要求泡咖啡時，茶壺表示我是一個茶壺，意指要求錯誤。

304 Not Modified：尚未修改，意指要求端仍有相同的東西，直接取用無需重新傳送。

### 3.假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://test.api.com

說明｜Method｜path｜參數
-------------|-------------
所有餐廳資料｜GET|/cooks|_limit: n
單一餐廳資料｜GET|/cooks/:id|無
刪除餐廳｜DELETE|/cooks/:id|name
新增餐廳｜POST|/cooks/|無
更改餐廳｜PATCH|/cooks/:id|name