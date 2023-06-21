// forms
const metaForm = document.querySelector('.meta-form')
const imageForm = document.querySelector('.image-form')

// output elements
const description = document.querySelector('.description p')
const thumbnail = document.querySelector('.thumbnail img') 

// description and tags
metaForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const res = await fetch('https://open-ai-gold.vercel.app/openai/meta', {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: metaForm.title.value}),
    method: 'POST'
  })
  const data = await res.json()

  console.log(data)

  description.textContent = data.description.content

})

// image/thumbnail
imageForm.addEventListener('submit', async (e) => {
    e.preventDefault()
  
    const res = await fetch('https://open-ai-gold.vercel.app/openai/image', {
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({prompt: imageForm.prompt.value}),
      method: 'POST'
    })
    const data = await res.json()
  
    thumbnail.setAttribute('src', data.url)
  })