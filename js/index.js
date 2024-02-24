let heroPara = document.getElementById('hero-para')
let heroImg = document.getElementById('hero-img')


heroImg.addEventListener('mouseover',function(){
    heroPara.innerText = "Our team of skilled artisans and designers is dedicated to turning your vision into a living masterpiece. Whether it's a modern kitchen, a cozy living space, or a luxurious bathroom, we bring unparalleled expertise to every project."
})

heroImg.addEventListener('mouseout',function(){
    heroPara.innerText =" At Home Renovations, we believe that your home is a canvas waiting to be adorned with creativity and craftsmanship. Step into a world where dreams meet reality, and every corner tells a unique story of renovation and design.."
})

// Task 1 done.
function ChangeImageHeroSection(){
  let heroImg = document.getElementById('hero-img')
  let heroImg2 = document.getElementById('hero-imgTwo')
  let heading1 = document.getElementById('hero-title')
  let heading2 = document.getElementById('hero-title2')
  
  heroImg.addEventListener('mouseover',function(){
    heroImg.style.display = 'none'
    heroImg2.style.display = 'block'
    heading1.style.display = 'none'
    heading2.style.display = 'flex'
  })
  heroImg.addEventListener('mouseout',function(){
    heroImg.style.display = 'block'
    heroImg2.style.display = 'none'
    heading1.style.display = 'flex'
    heading2.style.display = 'none'
  })

}
ChangeImageHeroSection()

// task 17 done.
function AboutParaChangeToListOfNames(){
  let aboutPara = document.getElementById('aboutPara')
  let aboutLogo = document.getElementById('aboutLogo')
  let aboutList = document.getElementById('aboutList')
  aboutLogo.addEventListener('mouseover',function(){
    aboutPara.style.display = 'none'
    aboutList.style.display = 'block'
  })
  aboutLogo.addEventListener('mouseout',function(){
    aboutPara.style.display = 'block'
    aboutList.style.display = 'none'
  })
}
AboutParaChangeToListOfNames()

// task 2 done.
function ClickContactUsBtn(){
  let modal = document.querySelector('#modal')
  modal.style.display = 'block'
}

function closeModal(){
  modal.style.display = 'none'
}


// contact form
function ContactSubmit(){
  let modal = document.querySelector('#modal')

  let contacSubmit = document.querySelector('#contactSubmit')
  let email = document.querySelector('#contactEmail')
  let address = document.querySelector('#contactAddress')
  let telephone = document.querySelector('#contactTelephone')
  let error = document.querySelector('#contactError')
  let alertMessage = document.getElementById('modalChoice')

  contacSubmit.addEventListener('click',function(){
   
   
    if(!email.value.trim()){
      error.textContent = 'Email required'
    }else if(!address.value.trim()){
       error.innerHTML = 'Address required'
    }else if(!telephone.value.trim()){
       error.textContent = 'telephone required'
    }else {
      error.textContent = ''
      modal.style.display = 'none'
      alertMessage.style.display = 'block'
      setTimeout(()=>{
        alertMessage.style.display = 'none'
      },2000)
      email.value = ''
      address.value = ''
      telephone.value = ''
    }

  })
}
ContactSubmit()

// contact form page
function ContactPage(){

  let contactPage = document.querySelector('#contactPage')
  let emails = document.querySelector('#emails')
  let addres = document.querySelector('#addres')
  let tele = document.querySelector('#tele')
  let comment = document.querySelector('#comment')
  let errors = document.querySelector('#contactErrors')
  let alertMessage = document.getElementById('modalChoice')

  errors.style.color = 'red'

  contactPage.addEventListener('click',function(){
   
   
    if(!emails.value.trim()){
      errors.textContent = 'Email required'
    }else if(!tele.value.trim()){
       errors.innerHTML = 'telephone required'
    }else if(!addres.value.trim()){
       errors.textContent = 'address required'
    }else if(!comment.value.trim()){
      errors.textContent = 'comment required'
    }else{
      errors.textContent = ''
      alertMessage.style.display = 'block'
      setTimeout(()=>{
        emails.value = ''
        tele.value =''
        addres.value = ''
        comment.value = ''
        alertMessage.style.display = 'none'
      },1000)
    
    }

  })
}
ContactPage()
