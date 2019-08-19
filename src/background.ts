browser.tabs.onUpdated.addListener((tab, changeInfo) => {
  console.log('Hello from the background', tab, changeInfo)

  if (changeInfo.status && changeInfo.status === 'complete') {
    browser.tabs.executeScript({
      file: 'js/content-script.js'
    })
  }
})

browser.runtime.onMessage.addListener((msg) => {
  if (msg.name === 'addIssue') {
    console.log(msg.payload) // eslint-disable-line
  }
})
