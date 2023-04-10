//select elenent.
const form=document.querySelector('form')
const name=form.querySelector("#name")
const email=form.querySelector("#email")
const password=form.querySelector("#password")

form.addEventListener('submit', Fromhadler)

function Fromhadler(e){
    e.preventDefault()
   const user={
    name:name.value,
    email:email.value,
    password:password.value
   }
   console.log(user)
}

//html code
<form >
  <label for="name">Name:
    <input type="text" id="name" name="name" required/>
  </label><br/>
  <label for="email">Email:
    <input type="email" id="email" name="email" required/>
  </label><br/>
  <label for="password">password:
    <input type="password" id="password" name="password" required/>
  </label><br/>
 <button type="submit">Submit</button>
</form>