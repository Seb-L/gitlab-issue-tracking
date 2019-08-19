console.log('Hello from the content-script')

document.querySelectorAll('li.issue')
  .forEach((el) => {
    const issueBox = el.querySelector('.issue-box')
    const id = el.getAttribute('data-id')
    console.log(id, el)

    el.setAttribute('style', 'display: flex; flex-direction: row;')

    const addBtn = document.createElement('button')
    addBtn.innerText = 'ADD'
    addBtn.setAttribute('issue-id', `${id}`)
    addBtn.onclick = function () {
      console.log(addBtn.getAttribute('issue-id'))

      browser.runtime.sendMessage({
        name: 'addIssue',
        payload: {
          id: `${addBtn.getAttribute('issue-id')}`
        }
      })
    }

    el.insertBefore(addBtn, issueBox)
  })
