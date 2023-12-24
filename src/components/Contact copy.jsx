
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Loader from "./Loader";

export const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    howDidYouHearAboutUs: '',
    message: '',
    interestedIn: '',
    _gotcha: ''
  })

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [captchaCheck, setCaptchaCheck] = useState(null)
  const { firstName, lastName, mobile, email, howDidYouHearAboutUs, message, interestedIn } = formData
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!captchaCheck) {
      return setCaptchaCheck(false)
    }

    setLoading(true)

    // info@stalwartprod.com.au
    try {
      const res = await fetch("https://public.herotofu.com/v1/fe550930-81ba-11ee-97b0-f5224e9a6b83", {
        method: 'POST',
        // mode: 'no-cors',
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

  function onCaptchaChange(e) {
    if (e) {
      setCaptchaCheck(true)
    }
  }

  return (
    <section id="contact" className='bg-aeroBlue lg:bg-white'>
      <div className="xs:container m-auto  md:px-0 pt-20 md:pt-40 lg:py-40">
        {!success && (
          <>
            <h2 className='mb-4 px-4 md:px-10 text-2xl md:text-4xl '>Contact Us</h2>
            <p className="text-sm mb-8 lg:w-2/5 px-4 md:px-10">Please contact us to compare and customize all the packages and get the best deal out of it.</p>
          </>
        )}

        <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-x-10 ">
          {!success ? (
            <>

              <form onSubmit={(e) => onSubmit(e)} className='bg-aeroBlue md:col-span-2  md:px-8 py-8 md:py-16  grid grid-cols-1  md:grid-cols-2 md:gap-x-10 gap-y-10 relative px-4 md:px-0'>
                {loading && (<Loader />)}

                <input value={firstName} required type='text' name='firstName' className='w-full py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black' placeholder='First Name*' onChange={e => onChange(e)} />
                <input value={lastName} required type='text' name='lastName' className='w-full py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black ' placeholder='Last Name*' onChange={e => onChange(e)} />
                <input value={mobile} required type='tel' name='mobile' className='w-full py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black' placeholder='Mobile*'pattern='[0-9]{10}' onChange={e => onChange(e)} />
                <input value={email} required type='email' name='email' className='w-full py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black' placeholder='Email*' onChange={e => onChange(e)} />
                <select name="interestedIn" value={interestedIn} onChange={e => onChange(e)} required placeholder='Interested In' id="interestedIn" className='w-full py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black'>
                  <option value="" hidden className=''>Interested In</option>
                  <option value="rental" className='py-2'>Rental Package</option>
                  <option value="photography" className=''>Basic Photography Package</option>
                  <option value="photo_video" className=''>Photo / Video Package</option>
                  <option value="corporate" className=''>Corporate Headshots</option>
                  <option value="corporate_commerical_media" className=''>Corporate / Commercial Media</option>
                  <option value="ads" className=''>Ads</option>
                  <option value="evetns_weddings" className=''>Events & Weddings</option>
                </select>
                
                <select name="howDidYouHearAboutUs" value={howDidYouHearAboutUs} onChange={e => onChange(e)} required placeholder='How Did You Hear About Us' id="howDidYouHearAboutUs" className='w-full py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black'>
                  <option value="" hidden className=''>How Did You Hear About Us</option>
                  <option value="wordOfMouth" className='py-2'>Word Of Mouth</option>
                  <option value="facebook" className=''>Facebook</option>
                  <option value="googleAds" className=''>Google Ads</option>
                  <option value="googleSearch" className=''>Google Search</option>
                </select>

                <textarea name="message" id="message"  className='w-full h-32 md:col-span-2 py-1 bg-transparent placeholder:text-black text-sm text-black border-b border-black' placeholder='Message' onChange={e => onChange(e)} value={message} />

                <div className="md:col-span-2">
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    onChange={e => onCaptchaChange(e)}
                  />
                  {captchaCheck === false && <p className='text-xs text-red-500 mt-2'>Please confirm you are not a robot</p>}
                </div>

                <input type="submit" value="Submit" className='cursor-pointer list-none btn text-center bg-black text-white py-2 px-6 font-bold uppercase mt-4 w-32' />

              </form>
            </>
          ) : (
            <div className="md:col-span-2 pl-10 bg-aeroBlue pr-8 pb-20 lg:pb-0 flex justify-center items-center">
              <h3 className="w-full  text-center">Thank you for your interest in Stalwart Production House.<br /> We will be in touch soon.</h3>
            </div>
          )}


          <div className='py-16 px-8 bg-secondBlack text-center text-white flex flex-col justify-center md:w-full'>
            <h3 className='text-aeroBlue mb-4'>Stalwart Production House</h3>
            <p className='text-sm mb-8'>Noble Street<br />Allawah, NSW 2218</p>
            <p className="text-sm">Mobile: <a href="tel:+0452424566">0433 753 635</a></p>
            <p className="text-sm">Email: <a href="mailto:info@stalwartprod.com.au">info@stalwartprod.com.au</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}


