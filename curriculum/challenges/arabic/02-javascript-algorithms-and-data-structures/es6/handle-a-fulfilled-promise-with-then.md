---
id: 5cdafbd72913098997531681
title: Handle a Fulfilled Promise with then
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

الـ Promises مفيدة للغاية عندما تكون لديك عملية تستغرق قدرا غير معروف من الوقت في الكود الخاص بك (شيء غير متزامن)، غالبا ما يكون server request. عندما تقوم بـ server request يستغرق ذلك بعض الوقت، وبعد اكتمالها تريد عادة أن تفعل شيئا بالـ response المعادة من الـ server. يمكن تحقيق ذلك باستخدام method الـ `then`.

```js
Promise.prototype.then(onFulfilled, onRejected)
```

The `then` method schedules callback functions for the eventual completion of a Promise - either fulfillment or rejection. One of the `onFulfilled` and `onRejected` handlers will be executed to handle the current promise's fulfillment or rejection. When the promise is fulfilled with `resolve` the `onFulfilled` handler is called.

```js
myPromise.then(result => {

});
```

`result` تأتي من الـ argument المعطاة لـ method الـ`resolve`.

# --instructions--

أضف method الـ `then` إلى الـ promise الخاص بك. استخدم `result` كوسيط لوظيفة تعيد تفعيلها وسجل قيمة `result` في وحدة التحكم (console).

# --hints--

يجب عليك استدعاء method الـ `then` على الـ promise.

```js
assert(
  __helpers.removeWhiteSpace(__helpers.removeJSComments(code)).match(/(makeServerRequest|\))\.then\(/g)
);
```

يجب أن تكون لطريقة (method) المسمى `then` الوظيفة تعيد تفعيلها (callback function) مع `result` كوسيط (parameter).

```js
assert(resultIsParameter);
```

يجب عليك اخراج `result` إلى وحدة التحكم.

```js
assert(
  resultIsParameter &&
    __helpers
      .removeWhiteSpace(__helpers.removeJSComments(code))
      .match(/\.then\(.*?result.*?console.log\(result\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const resultIsParameter = /\.then\((function\(result\){|result|\(result\)=>)/.test(__helpers.removeWhiteSpace(__helpers.removeJSComments(code)));
```

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```
