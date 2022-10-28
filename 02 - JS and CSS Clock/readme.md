# 03 - **CSS Variables and JS**

## 摘要 [#](https://alisone11.github.io/JavaScript30/03%20-%20CSS%20Variables/index-START.html)

使用CSS變數和`<input>`的事件監聽來控制，移動畫面上的滑動桿就能改變圖片的邊界、模糊度和邊框顏色。

## 控制圖片模糊度：`blur(*radius*)`

```css
img{
	filter: blur(5px);
}
```

## **`NodeList`**：`document.querySelectorAll`取得

`NodeList`物件是節點的集合，不是陣列，但仍可以使用某些陣列方法來進行迭代。

```jsx
const inputs = document.querySelectorAll('.controls input');
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32f9e0be-15fe-4507-862d-64b0a9483462/Untitled.png)

## 事件監聽：`change` / `mousemove`

### `change` 事件

當`<input>`、`<select>`和`<textarea>`等表單元素的值被改變時觸發。

與 `input`事件不同的是，`input`事件會在輸入框輸入內容的當下觸發，而 `change`事件則是在目前焦點離開輸入框後才觸發。

### `mousemove` 事件

當滑鼠游標在這個元素內「移動」時，會連續觸發。

### 注意事項

`inputs`包含所有`<input>`元素，因此使用`forEach()`方法才能監聽各個元素。

```jsx
function handleUpdate(){
      console.log(this.value);
    }
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```

## 取得`data-*`的值：`dataset`

`color`沒有後綴，因此另外加上`or`條件，以免出現`undefined`。

```jsx
const suffix = this.dataset.sizing || ''; 
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da403ab7-b6f5-46ab-9bf5-92caa72a6464/Untitled.png)

## 設定CSS屬性與值：`style.setProperty(*property, value*)`

`document.documentElement`會回傳根元素，也就是`<html>`。
