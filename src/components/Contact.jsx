
import React, { useState, useRef, useEffect } from 'react'
import ReCAPTCHA  from 'react-google-recaptcha'

export const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    howDidYouHearAboutUs: '',
    interestedIn: '',
    _gotcha: ''
  })

  const [success, setSuccess] = useState(false)
  const { firstName, lastName, mobile, email, howDidYouHearAboutUs, interestedIn } = formData
const captchaRef = useRef(null)
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const token = captchaRef.current.getValue()
    console.log(token)
    return

    try {
      const res = await fetch("https://public.herotofu.com/v1/fe550930-81ba-11ee-97b0-f5224e9a6b83", {
        method: 'POST',
        cache: "no-cache",

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res && res.status === 200) {
        setSuccess(true)
      }
      else {
        throw new Error('Error')
      }
    }

    catch (error) {
      if (error) {
        console.log(error)
        console.log(error.message)
      }
    }


  }

  function onCaptchaChange(value) {
    console.log(value)
  }
  return (
    <section id="contact" className=''>
      <div className="lg:container m-auto xl:px-32 md:px-16 py-40">
        <h2 className='mb-4'>Contact Us</h2>
        <p className="text-sm mb-8 w-2/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie lacus in ante vestibulum, vitae aliquam felis feugiat. Nullam euismod risus.</p>
        <div className="grid grid-cols-3 gap-x-10">
          {!success? (
            <form onSubmit={(e) => onSubmit(e)} className='bg-aeroBlue col-span-2  px-8 py-16 grid md:grid-cols-2 gap-x-10 gap-y-10'>
            <input value={firstName} required type='text' name='firstName' className='py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black' placeholder='First Name*' onChange={e => onChange(e)} />
            <input value={lastName} required type='text' name='lastName' className='py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black' placeholder='Last Name*' onChange={e => onChange(e)} />
            <input value={mobile} required type='tel' name='mobile' className='py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black' placeholder='Mobile*' onChange={e => onChange(e)} />
            <input value={email} required type='email' name='email' className='py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black' placeholder='Email*' onChange={e => onChange(e)} />
            <select name="interestedIn" value={interestedIn} onChange={e => onChange(e)} required placeholder='Interested In' id="interestedIn" className='py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black'>
              <option value="" hidden className=''>Interested In</option>
              <option value="realEstate" className='py-2'>Real Estate Advertisment</option>
              <option value="film" className=''>Fim Making</option>
              <option value="silver" className=''>Silver Plan</option>
              <option value="gold" className=''>Gold Plan</option>
              <option value="diamond" className=''>Diamond Plan</option>
            </select>
            <select name="howDidYouHearAboutUs" value={howDidYouHearAboutUs} onChange={e => onChange(e)} required placeholder='How Did You Hear About Us' id="howDidYouHearAboutUs" className='py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black'>
              <option value="" hidden className=''>How Did You Hear About Us</option>
              <option value="wordOfMouth" className='py-2'>Word Of Mouth</option>
              <option value="facebook" className=''>Facebook</option>
              <option value="googleAds" className=''>Google Ads</option>
              <option value="googleSearch" className=''>Google Search</option>
            </select>

            <ReCAPTCHA
              sitekey='6LdCCg0pAAAAAODfQb_snsWQ7oM0EFkYDhIQSGdW'
              onChange={onCaptchaChange}
            />

            <input type="submit" value="Submit" className='cursor-pointer list-none btn text-center bg-black text-white py-2 px-6 font-bold uppercase mt-4 w-32' />

            
          </form>
          ): (
            <div className="col-span-2  px-8 py-16 gap-x-10 gap-y-10">
              <h3 className="w-full">Thank yoy for your interest in Stalward Prod Agency.<br /> We will be in touch soon.</h3>
            </div>
          )}
          

          <div className='py-16 px-8 bg-secondBlack text-center text-white flex flex-col justify-center'>
            <h3 className='text-aeroBlue mb-4'>Stalward Prod Agency Ltd</h3>
            <p className='text-sm mb-8'>Adress 234,<br />address, NSW 2000</p>
            <p className="text-sm">Mobile: <a href="tel:+0452424566">045 242 565</a></p>
            <p className="text-sm">Email: <a href="mailto:info@info.com">info@info.com</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}


